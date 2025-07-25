import axios from 'axios';
import React, { useState } from 'react'

const AddItems = () => {
    const [formdata,setFormData] = useState({
        item_name:'',
        item_amount:'',
        image:''
    })

    const handlechange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  }


    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            const data = new FormData();
            data.append('item_name',formdata.item_name);
            data.append('item_amount',formdata.item_amount);
            data.append('image',formdata.image);

            const response = await axios.post('http://localhost:3000/add_item',data,{
                withCredentials:true
            });

            alert(response.data.message);

            
        }catch(err){
            alert('some other error occured')
        }


    }

    return (
        <div className='row'>
            <h3 className='mx-5 text-light'>Add Items</h3>
            <div className='col-md-8 mx-auto rounded' style={{ backgroundColor: 'rgb(234, 239, 239)' }}>

                <p className='text-dark text-center '>Add a New Item</p>
            <form className='d-flex flex-row  mx-auto rounded'  action="" onSubmit={handleSubmit}>
                <input className='mx-1 my-2 ' name='item_name' onChange={handlechange} type="text" placeholder='Item Name' />
                <input className='mx-1 my-2' name='item_amount' onChange={handlechange} type="number" placeholder='Enter Amount' />
                <label className='mx-1 my-2'  htmlFor="fileInput">Image:</label>
                <input className='mx-1 my-2 form-control shadow-lg bg-warning ' name='image' onChange={handlechange} type="file" id="fileInput" />
                <button className='btn btn-success w-50 my-2'>Add</button>
            </form>
            </div>

        </div>
    )
}

export default AddItems 