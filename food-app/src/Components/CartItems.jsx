import React from 'react'
import CartItemCard from './CartItemCard'
import { useContext } from 'react'
import UserContext from '../Contexts/UserContext'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const CartItems = () => {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState();
  var Total_Quantity = 0;
  var Total_Price = 0;
  // const {user,setUser} = useContext(UserContext);
  // console.log(`User ${user}`);
  useEffect(() => {
    const get_items = async () => {
      const response = await axios.get('http://localhost:3000/cartitems', {

        withCredentials: true
      });
      const fetched_items = response.data.items;
      const status = response.data.status;
      if (status === false) {
        setMessage(response.data.message);
      } else {
        setItems(fetched_items);
      }
      // console.log(response.data.status);
    }
    get_items();
  }, [items]);


  const RemoveItem = async(id)=>{
    try{
      const result = await axios.delete(`http://localhost:3000/delete_cart_item/${id}`);
      if(!result){
        alert('Could not delete item');
      }
      
      
    }catch(err){
      alert('Could not delete due to Error');
    }
  }

  const ProceedOrder = async()=>{
    try {
      const response = await axios.post('http://localhost:3000/proceed_order',{
        items:items},{
        withCredentials:true
      })

      
        alert(response.data.message)
      
    } catch (error) {
      alert("Error while proceeding order")
    }
  }
  return (

    <div className=' row w-75 m-auto my-5'>
      <table className=' mx-5 table table-light table-striped table-rounded'>
        <thead>

        </thead>
        <tbody>
          {
            items.map((item) => {
              Total_Quantity += item.quantity;
              var Item_Price = item.quantity * item.itemAmount;
               Total_Price += Item_Price; 

            return(
              <tr className='' key={item._id}>
                <td>
                  <img
                    src={`http://localhost:3000/uploads/${item.itemImage}`}
                    alt={item.itemName}
                    style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '10px' }}
                  />
                  {item.itemName}
                </td>
                <td>{item.itemAmount}</td>
                <td>x</td>
                <td>{item.quantity}</td>
                <td>{item.itemAmount * item.quantity}</td>
                <td>
                <button className='btn btn-danger' onClick={()=>RemoveItem(item._id)} >Trash</button>

                </td>
              </tr>

            )}
            )


          }
        </tbody>
      </table>



          {items.length == 0 ?(
            <div></div>
          ):(

            
            <div className='mt-3'>

      <div className='d-flex flex-column text-White p-3 rounded w-25 float-end shadow-lg' style={{backgroundColor:'rgb(242, 242, 242)'}}>
        <h4 className='text-center text-warning'>Order Now</h4>
          <div className='d-flex flex-row justify-content-between m-2'><h6>Items</h6> <h6>{items.length}</h6></div>
          <div className='d-flex flex-row justify-content-between m-2'><h6>Quantity</h6> <h6>{Total_Quantity}</h6></div>
          <div className=' border-top border-dark d-flex flex-row justify-content-between mt-4'><h6>Total</h6><h6>{Total_Price}</h6></div>
          <button onClick={()=>ProceedOrder()} className='btn btn-warning'>Proceed</button>


      </div>
      </div>
      )}

    </div>
  )
}

export default CartItems