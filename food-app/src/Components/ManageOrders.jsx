// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const ManageOrders = () => {
//   const [orders,setOrders] = useState([]);
//   const [orderItems,setOrderItems] = useState([]);
//   const [message,setMessage] = useState();
//   useEffect(()=>{
//     const get_orders = async()=>{
//       try{

//         const response = await axios.get('http://localhost:3000/get_all_orders',{
//           withCredentials:true
//         });
//         if(!response.data.status){
//           setMessage(response.data.message);
//         }

//         setOrders(response.data.orders);

//       }catch(err){
//         console.log('ERROR!');
//       }

//     }
//   })

//   return (
//     <div>
//       <h3 className='text-light mx-5' >Manage Orders </h3>
//       <div>


//       </div>

//     </div>
//   )
// }

// export default ManageOrders






import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState('');
  const [statusUpdateMessage, setStatusUpdateMessage] = useState('');

  useEffect(() => {
    const get_orders = async () => {
      try {
        const response = await axios.get('http://localhost:3000/get_all_orders', {
          withCredentials: true
        });

        if (!response.data.status) {
          setMessage(response.data.message); // like "Nothing to show"
          setOrders([]); // Make sure orders array is empty
        } else {
          setOrders(response.data.orders);
        }
      } catch (err) {
        console.log('ERROR!', err);
        setMessage('Failed to fetch orders.');
      }
    };

    get_orders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/update_order_status/${orderId}`,
        { status: newStatus },
        { withCredentials: true }
      );


      alert(response.data.message);
      if (response.data.status) {

        // Update local state
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
        setStatusUpdateMessage('Order status updated successfully!');
      }
    } catch (err) {
      console.error('Failed to update status', err);
      setStatusUpdateMessage('Failed to update order status.');
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-light mx-3">Manage Orders</h3>

      {message ? (
        <p className="text-warning">{message}</p>
      ) : (
        <>
          {statusUpdateMessage && <p className="text-success">{statusUpdateMessage}</p>}
          <table className="table table-bordered table-striped table-dark">
            <thead className="table-dark">
              <tr>
                <th>Client Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.userid?.f_name || 'Unknown'}</td>
                  <td>{order.userid?.address || 'N/A'}</td>
                  <td>{order.userid?.phone || 'N/A'}</td>
                  <td>
                    <select
                      className="form-select "
                      value={order.status}
                      onChange={(e) => handleStatusChange(order._id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Process">In Process</option>
                      <option value="Out for Delivery">Out for Delivery</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td>
                    <details>
                      <summary className="text-primary ">View Items</summary>
                      <ul className="mb-0">
                        {order.items.map((item, index) => (
                          <li key={index}>
                            {item.itemName} × {item.quantity}
                          </li>
                        ))}
                      </ul>
                    </details>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ManageOrders;
