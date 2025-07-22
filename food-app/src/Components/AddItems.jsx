import React from 'react'

const AddItems = () => {
    return (
        <div className='row'>
            <h3 className='mx-5 text-light'>Add Items</h3>
            <form className='d-flex flex-column col-md-6 p-3 mx-auto rounded' style={{ backgroundColor: 'rgb(234, 239, 239)' }} action="">
                <p className='text-dark text-center '>Add a New Item</p>
                <input className='m-2' type="text" placeholder='Item Name' />
                <input className='m-2' type="number" placeholder='Enter Amount' />
                <label for="fileInput">Add Image:</label>
                <input type="file" id="fileInput" />
                <button className='btn btn-success mx-5 mt-3'>Add</button>
            </form>

        </div>
    )
}

export default AddItems