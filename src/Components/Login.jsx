import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LoginContext from '../Contexts/LoginContext'



const Login = () => {
  const {login,setLogin} = useContext(LoginContext);
  return (
    <div className='row d-flex align-items-center justify-content-center vh-100'>
        <div className=' d-flex mx-auto my-12  d-flex flex-column p-3 border col-10 col-md-8 col-lg-4 border-2 row border-warning rounded bg-light'>
            <h3 className='text-warning text-center'>Login</h3>
            <form className='d-flex flex-column' action="">
                <input className='m-2' type="text" placeholder='Enter UserName' />
                <input className='m-2' type="password" placeholder='Enter Password' />
                <button className=' mt-5 w-5 btn btn-success border border-2 border-success text-light' type='submit'>Login</button>
               <div className='d-flex flex-row fs-8 mt-1'><p>Don't have account? </p><p onClick={()=>setLogin(!login)} className='text-primary cursor-pointer '> CreateAccount</p> </div>
            </form>
        </div>
    </div>
  )
}

export default Login