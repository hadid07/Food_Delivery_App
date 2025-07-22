import React, { useState } from 'react'
import AddItems from './AddItems';
import ViewItems from './ViewItems';

const ManageItems = () => {
    const [additem,setAdditem] = useState(true);
  return (
    <div className='bg-light rounded'>
        <h4 className='text-warning text-center mt-2'>Manage Items</h4>
        <button className='btn btn-primary' onClick={()=>setAdditem(!additem)}>
            {additem ? 'View Items':'Add Items'}
        </button>

        {additem? <AddItems/> : <ViewItems/>}             

    </div>
  )
}

export default ManageItems