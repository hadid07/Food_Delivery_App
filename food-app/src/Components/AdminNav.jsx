import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
    return (
        <div className=''>

            <div className=' border-bottom border-light navbar navbar-expand navbar-dark d-flex flex-row text-white justify-content-between'>
                <Link to="/" className=" mx-3 navbar-brand text-white">
                    Tàng Chī (烫吃)
                </Link>
                <div>
                    <button className='btn btn-danger mx-3'>Logout</button>
                </div>

            </div>
        </div>

    )
}

export default AdminNav