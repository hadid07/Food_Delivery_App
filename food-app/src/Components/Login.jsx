import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginContext from '../Contexts/LoginContext'
import TokenContext from '../Contexts/TokenContext'
import UserContext from '../Contexts/UserContext'

import axios from 'axios'

const Login = () => {

  const {login,setLogin} = useContext(LoginContext);
    const { token, setToken } = useContext(TokenContext);
    const {user,setUser} = useContext(UserContext)
    const navigate = useNavigate();
  const [loginform,setLoginform] = useState({
    username:'',
    password:''
  })

  const handlechange = (e)=>{
    const {name,value}=e.target;
    setLoginform ((prev)=>({
      ...prev,
      [name]:value
    }))
  }

  const handlesubmit = async(e)=>{
    e.preventDefault();

    try{
      const data = {
        username:loginform.username,
        password:loginform.password
      }
      
      const response = await axios.post('http://localhost:3000/Login',data,{
        withCredentials:true
      })
      

      // setToken(response.data.token)
      const token = response.data.token;
      const isValid = response.data.isValid;
      if(!isValid){
        alert(response.data.message);
      }
      
      if(isValid){
        alert(response.data.message);
        setToken(token);
        setUser(response.data.user)
        navigate('/')
        alert(`Welcome ${response.data.user.f_name}`)
      }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='row d-flex align-items-center justify-content-center vh-100'>
        <div className=' d-flex mx-auto my-12  d-flex flex-column p-3 border col-10 col-md-8 col-lg-4 border-2 row border-warning rounded bg-light'>
            <h3 className='text-warning text-center'>Login</h3>
            <form className='d-flex flex-column' action=""  onSubmit={handlesubmit}>
                <input className='m-2' name='username' type="text" placeholder='Enter UserName' onChange={handlechange}/>
                <input className='m-2' name='password' type="password" placeholder='Enter Password' onChange={handlechange}/>
                <button className=' mt-5 w-5 btn btn-success border border-2 border-success text-light' type='submit'>Login</button>
               <div className='d-flex flex-row fs-8 mt-1'><p>Don't have account? </p><p onClick={()=>setLogin(!login)} className='text-primary cursor-pointer '> CreateAccount</p> </div>
            </form>
        </div>
    </div>
  )
}

export default Login