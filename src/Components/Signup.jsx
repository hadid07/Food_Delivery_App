import React from 'react'
import { useContext } from 'react'
import LoginContext from '../Contexts/LoginContext'

const Signup = () => {
  const {login,setLogin} = useContext(LoginContext)
  return (
      <div className='row d-flex align-items-center justify-content-center vh-100'>
        <div className=' d-flex mx-auto my-12  d-flex flex-column p-3 border col-10 col-md-8 col-lg-6 border-2 row border-warning rounded bg-light'>
            <h3 className='text-warning text-center'>SignUp</h3>
            <form className='d-flex flex-column p-3' action="">
                <input className='m-2' type=" text" placeholder='First Name' />
                <input className='m-2' type=" text" placeholder='Last Name' />
                <input className='m-2' type="email" name="email" id="" placeholder='Enter Your valid Email address '/>
                <input className='m-2' type="text" placeholder='Enter your Phone Number' />
                <input className='m-2' type="password"  placeholder='Enter Password'/>
                <input className='m-2' type="password"  placeholder='Confirm Password'/>
                <input className='m-2 btn btn-success' type="submit" value="SignUp" />
                <div className='d-flex flex-row  mt-1 '><p>Already have account? </p><p onClick={()=>setLogin(!login)} className='text-primary cursor-pointer '> Login</p> </div>
                 </form>
        </div>
    </div>
  )
}

export default Signup