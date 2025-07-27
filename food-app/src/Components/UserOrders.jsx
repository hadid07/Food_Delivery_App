import React from 'react'
import { useContext } from 'react'
import UserContext from '../Contexts/UserContext'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const UserOrders = () => {
    const { user, setUser } = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [message, setMessage] = useState();
    const [haveOrders, setHaveOrders] = useState(false);
    // const [orderStatus, setOrderStatus] = useState();

    useEffect(() => {
        const get_user_orders = async () => {
            try {

                const response = await axios.get('http://localhost:3000/get_user_orders', {
                    withCredentials: true
                });
                setHaveOrders(response.data.status);
                // setOrderStatus(response.data.orders.status);
                if (response.data.status) {
                    setOrders(response.data.orders);
                }
                else {
                    setMessage(response.data.message);
                }

            } catch (err) {

            }

        }
        get_user_orders();
    }, [])

    const CancelOrder = async(orderid,orderstatus)=>{
        if(orderstatus == "Cancelled"){
             return alert("Already Cancelled!! Cannot Cancel Again");
        }
        try{
            const response = await axios.put(`http://localhost:3000/update_order_status/${orderid}`,{status:"Cancelled"},{
                withCredentials:true
            });
            alert(response.data.message);
        }catch(err){
            alert("Unable to Cancel Order");
        }
    }

    return (
        <div className='row'>
            <h3 className='text-light mx-5'> My Orders</h3>
            {
                haveOrders ? (
                    <div className=' col-8 text-light mx-auto '>
                        {orders.map((order) => {
                            let Total_Amount = 0;
                            return (
                                <div className=' text-dark my-5 bg-dark border border-warning rounded'>
                                    <div className='d-flex flex-column '>
                                        <div className='p-2 bg-warning rounded-top text-dark col-12'>{new Date(order.CreatedAt).toLocaleString()}</div>
                                        <div className='bg-success text-light col-2 my-2 mx-2 p-2'>{order.status}</div>
                                    </div>
                                    <table className='table table-dark  table-striped'>
                                        <thead></thead>
                                        <tbody>
                                            {order.items.map((item) => {

                                                Total_Amount += item.itemAmount * item.quantity
                                                return (

                                                    <tr>
                                                        <td>{item.itemName}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>x</td>
                                                        <td> {item.itemAmount}</td>
                                                        <td>{item.quantity * item.itemAmount}</td>
                                                    </tr>
                                                )
                                            }
                                            )}

                                        </tbody>
                                        <div className='d-flex col-12 flex-row justify-content-between mt-4 mx-2 border-top border-light'> <div className='' >Total Amount</div> <div className=''>{Total_Amount}</div></div>
                                        <div className=' mt-4 mx-2 col-12'>
                                            <button className='btn btn-danger' onClick={()=>CancelOrder(order._id,order.status)}>Cancel</button>

                                        </div>
                                    </table>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className='text-white text-center fs-5'>{message}</div>
                )
            }

        </div>
    )
}

export default UserOrders