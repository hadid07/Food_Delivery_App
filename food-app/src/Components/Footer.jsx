import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
        <div className='d-flex flex-column border-top border-1 border-light pt-5 py-3 '>
        <div className=' d-flex flex-row sm:flex-column text-white align-items-center justify-content-evenly '>

            {/* ------left side------ */}
            <div className='d-flex flex-column'>
                <h3 className='text-warning'>Locations</h3>
                <p>Commercial Rawalpindi</p>
                <p>Saddar Rawalpindi</p>
                <p>F7 Islamabad</p>
            </div>

            {/* -----right side----- */}
          <div className='d-flex flex-column text-white'>
  <Link
  to="/"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="text-white text-decoration-none mb-2"
>
  Home
</Link>
 <HashLink smooth to="/#Menu" className="text-white text-decoration-none mb-2">Menu</HashLink>
  <Link className='text-white text-decoration-none mb-2' to='/Cart' 
  onClick={()=>{window.scrollTo({top:0,behavior:'smooth'})}}>
    Cart</Link>
  <Link className='text-white text-decoration-none' to='/My-Orders'
  onClick={()=>{window.scrollTo({top:0,behavior:'smooth'})}}>
    My Orders</Link>
</div>

        </div>
        {/* -----Bottom----- */}
      <div className='text-center'>
  <p className='text-success'>Copyright © 2025 www.tangchi.com</p>
</div>

        </div>
    )
}

export default Footer
