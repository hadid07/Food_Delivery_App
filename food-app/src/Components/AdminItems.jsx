import axios from 'axios';
import React, { useEffect, useState } from 'react'
const AdminItems =  () => {


    const [items, setItems] = useState([]);

    useEffect(() => {
        const Get_Items = async()=>{

            
            const response = await axios.get('http://localhost:3000/get_items');
            const fetched_items = response.data.items;
            console.log(response.data.items)
            if (fetched_items.length === 0) {
                alert(response.data.message);
            }
            else {
                setItems(fetched_items);
                
            }
        }
        Get_Items();
    },[]);

    const handleDelete = async(item)=>{
        try{

            // const result = await User.find(item._id);
            const response = await axios.delete(`http://localhost:3000/delete_item/${item._id}`,{
                withCredentials:true  
            })           
            alert(response.data.message); 
        }catch(err){

            console.log('internal error')
    }
    }

    return (
        <div className=' row'>
            <h3 className='text-white mx-5'>All Items </h3>
            <table className=' table  table-dark table-striped  mx-5 my-3' >
                <thead className=''>
                    <tr className=''>
                        <td>Item Id</td>
                        <td className='' >Name</td>
                        <td className=''>Amount</td>
                        <td className=''>Actions</td>
                    </tr>
                </thead>
                <tbody className=''>
                    {items.map((item) => (
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td className='text-light'>{item.item_name}</td>
                            <td className='text-light'>{item.item_amount}</td>
                            <td>
                                {/* <button className='btn btn-outline-warning mx-2'>Edit</button> */}
                                <button className='btn btn-danger mx-2' onClick={()=>handleDelete(item)}> Delete</button>

                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default AdminItems