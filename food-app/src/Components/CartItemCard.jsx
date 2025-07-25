import React from 'react'

const CartItemCard = () => {
  return (
    <div className='d-flex' >

    <div className='fs-5  d-flex flex-row align-items-center justify-content-between text-white m-auto bg-muted border-danger '>
        <p className='mx-5'>Chowmein</p>
        <p className='mx-5'>x</p>
        <p className='mx-5'>1</p>
        <p className='mx-5'>500</p>
        <button className='btn btn-danger mx-5'>Remove</button>
    </div>
    </div>
  )
}

export default CartItemCard