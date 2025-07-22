import React from 'react'
import AdminNav from '../Components/AdminNav'
import FinanceCards from '../Components/FinanceCards'
import AddItems from '../Components/AddItems'

const AdminPanel = () => {
  return (
    <div>
        {/* -----Navbar----- */}
        <div>
            <AdminNav/>
        </div>


        {/* -----Main----- */}

        <div className=''>
         <FinanceCards/>
         <AddItems/>
        
        </div>
    </div>
  )
}

export default AdminPanel