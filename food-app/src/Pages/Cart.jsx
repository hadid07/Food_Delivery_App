import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import CartItems from '../Components/CartItems'

const Cart = () => {
  return (
    <div>
        <Nav/>
      <h3 className='mx-5 my-2 text-light'>Cart</h3>
        <CartItems/>
        <Footer/>
    </div>
  )
}

export default Cart