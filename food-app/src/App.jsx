import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Auth from './Pages/Auth'
import Cart from './Pages/Cart';
import MyOrders from './Pages/MyOrders';
import './App.css';
import '../src/index.css';


const App = () => {

  return (
      
    <div className='d-flex flex-column min-vh-100 hide-scrollbar'>


        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Auth' element={<Auth />}></Route>
            <Route path='/Cart' element={<Cart />}></Route>
            <Route path='/My-Orders' element={<MyOrders />}></Route>
          </Routes>
        </Router>

    </div>
      
  )

}

export default App