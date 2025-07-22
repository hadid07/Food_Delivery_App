import React from 'react'

const AddItems = () => {
    return (
        <div>
            <div className='row d-flex flex-column justify-content-center align-items-center '>

            <form action="" className='col-6 d-flex flex-column bg-gray m-5 p-3 border border-1 border-dark rounded shadow-lg '>
                <p className='text-dark text-center'>Add a New Item</p>
                <input className='m-2' type="text" placeholder='Item Name'/>
                <input className='m-2' type="number" placeholder='Item Price' />
                <p className='text-dark'>Choose Image</p>
                <input type="file" name="" id="" />
                <button type="submit" className='btn btn-success mx-5 mt-3'>Add</button>
            </form>
            </div>
        </div>
    )
}

export default AddItems