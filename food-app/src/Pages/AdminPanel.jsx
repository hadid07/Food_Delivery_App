import React from 'react'
import AdminNav from '../Components/AdminNav'
import ManageItems from '../Components/ManageItems'

const AdminPanel = () => {
  return (
    <div>
        {/* -----Navbar----- */}
        <div>
            <AdminNav/>
        </div>


        {/* -----Main----- */}

        <div className='row '>
          <div className='border border-1 border-light bg-light col-7 mx-auto mt-5 rounded'>
          <ManageItems/>

          </div>
        </div>
    </div>
  )
}

export default AdminPanel