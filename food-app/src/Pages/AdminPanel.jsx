import React, { useState } from 'react'
import AdminNav from '../Components/AdminNav'
import FinanceCards from '../Components/FinanceCards'
import AddItems from '../Components/AddItems'
import AdminItems from '../Components/AdminItems'
import ManageOrders from '../Components/ManageOrders'

const AdminPanel = () => {
  const [ItemOrderToggle,setItemOrderToggle] = useState(true);
  return (
    <div>
        {/* -----Navbar----- */}
        <div>
            <AdminNav/>
        </div>


        {/* -----Main----- */}

        <div className=''>
         <FinanceCards/>
         <button className='mx-5 my-4 btn btn-primary' onClick={()=>setItemOrderToggle(!ItemOrderToggle)}>{ItemOrderToggle ? 'Manage Items' : 'Manage Orders'}</button>
        <div>
        {ItemOrderToggle ? (
           
            <ManageOrders/>

           
        ) : ( <>
          <AddItems/>
          <AdminItems/>
        </>
         )}

        </div>

        
        </div>
    </div>
  )
}

export default AdminPanel