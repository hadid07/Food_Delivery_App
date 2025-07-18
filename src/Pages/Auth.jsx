import React, { useState } from 'react'
import Nav from '../Components/Nav'
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import { useContext,createContext } from 'react';
import LoginContext from '../Contexts/LoginContext';

const Auth = () => {
  const {login,setlogin} = useContext(LoginContext);

  return (
    <div>

    {
      login?(<Login/>):(
        <Signup/>
      )
    }
    </div>
  )
}

export default Auth