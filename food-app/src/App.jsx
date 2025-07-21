import React, { useContext, useEffect } from 'react'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Home from './Pages/Home';
import Auth from './Pages/Auth'
import Cart from './Pages/Cart';
import MyOrders from './Pages/MyOrders';
import './App.css';
import axios from 'axios';
import LoginContext from './Contexts/LoginContext';
import UserContext from './Contexts/UserContext';
import TokenContext from './Contexts/TokenContext';


const App = () => {
  const {login,setLogin} = useContext(LoginContext);
  const {user,setUser} = useContext(UserContext);
  const {token,setToken} = useContext(TokenContext);
   useEffect(() => {
    const verify_token = async()=>{
      try{

        const response = await axios.get('http://localhost:3000/isAuth',
          {withCredentials:true});
          console.log(response.data);
          setToken(response.data.token);
          if(response.data.user){
            setUser(response.data.user);
          }

        }catch(err){
          console.log(err);
        }
    }
    
    
    verify_token();
  }, [])
  
  
  return (
    <div>

    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/Auth' element = {<Auth/>}></Route>
        <Route path='/Cart' element = {<Cart/>}></Route>
        <Route path='/My-Orders' element = {<MyOrders/>}></Route>
      </Routes>
    </Router>
    
    </div>
  )
}

export default App