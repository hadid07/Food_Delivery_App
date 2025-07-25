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
  }, []);


  return (

    <div className=' row w-75 m-auto my-5'>
      <table className=' mx-5 table table-light table-striped table-rounded'>
        <thead>

        </thead>
        <tbody>
          {
            items.map((item) => (
              <tr className='' key={item._id}>
                <td>
                  <img
                    src={`http://localhost:3000/uploads/${item.itemImage}`}
                    alt={item.itemName}
                    style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '10px' }}
                  />
                  {item.itemName}
                </td>
                {/* <td><img src = {`http://localhost:3000/uploads/${item.itemImage}`} alt="" />{item.itemName}</td> */}
                <td>{item.itemAmount}</td>
                <td>x</td>
                <td>{item.quantity}</td>
                <td>{item.itemAmount * item.quantity}</td>
              </tr>

            )
            )


          }
        </tbody>
      </table>

    </div>
  )
}

export default CartItems