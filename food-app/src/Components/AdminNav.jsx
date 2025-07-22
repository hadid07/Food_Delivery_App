import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
    return (
        <div className=''>

            <div className='navbar navbar-expand navbar-dark d-flex flex-row text-white justify-content-between'>
                <Link to="/" className=" mx-3 navbar-brand text-white">
                    Tàng Chī (烫吃)
                </Link>
                <div>
                    <button className='btn btn-danger mx-3'>Logout</button>
                </div>

            </div>


            <div className='navbar  bg-light p-0' style={{ height: '60px' }}>
                <ul className='d-flex row vw-100 list-unstyled align-items-stretch justify-content-center h-100 m-0'>
                    <li className='bg-success text-white col-6 text-center border border-2 border-dark d-flex align-items-center justify-content-center'>
                        Manage Orders
                    </li>
                    <li className='bg-success text-white col-6 text-center border border-2 border-dark d-flex align-items-center justify-content-center'>
                        Manage Items
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default AdminNav