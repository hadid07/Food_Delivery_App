import React, { useEffect, useState } from 'react'
import F_Cards from './F_Cards'
import axios from 'axios';

const FinanceCards = () => {
  const [income,setincome] = useState(0);
  const [total_Orders,setTotal_Orders] = useState(0);
  const [Completed_Orders,setCompletedOrders] = useState(0);
  const [queOrders,setQueOrders] = useState(0);

  useEffect(()=>{
    const get_orders_details = async() => {
      try{
        const response = await axios.get('http://localhost:3000/get_order_details',{
          withCredentials:true
        });
        if(!response.data.status){
          alert(response.data.message);
        }
        else{
          setincome(response.data.TotalIncome);
          setTotal_Orders(response.data.TotalOrders);
          setCompletedOrders(response.data.CompletedOrders);
          setQueOrders(response.data.QueOrders);
        }
      }catch(err){
        console.log(err);
        alert("Could't Get Details of Orders");
      }
    }
    get_orders_details();
  },[]);


  return (
    <div className='d-flex flex-row mt-4 vw-100 align-items-center justify-content-center'>
        <F_Cards Amount = {income} Desc = 'Income' Color = 'rgb(103, 174, 110)'/>
        <F_Cards Amount = {total_Orders} Desc = 'Total Orders' Color = 'rgb(225, 238, 188)'/>
        <F_Cards Amount = {Completed_Orders} Desc = 'Completed' Color = 'rgb(129, 154, 145)'/>
        <F_Cards Amount = {queOrders} Desc = 'In Que' Color = 'rgb(255, 208, 199)'/>
    </div>
  )
}

export default FinanceCards