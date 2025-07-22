import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dp from "../assets/images/my-pic.jpg";
import TokenContext from '../Contexts/TokenContext';
import { useContext,createContext } from 'react';
import UserContext from '../Contexts/UserContext';
import axios from 'axios';


const Nav = () => {
  
  const { token, setToken } = useContext(TokenContext);
  const [showMenu, setShowMenu] = useState(false);
  const {user,setUser} = useContext(UserContext);
  // const image = user.image;
  const menuRef = useRef();
  const navigate = useNavigate();

  const handeLogout = async()=>{
    const response = await axios.post('http://localhost:3000/logout',{},{
      withCredentials:true
    });
    // const Ver_token = response.data.token;
    setToken(response.data.token);
    setUser(null);

  }

  // Close dropdown when clicking outside the menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-light bg-dark border-bottom border-light">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link to="/" className="navbar-brand text-white">
          Tàng Chī (烫吃)
        </Link>

        {/* Responsive Search Bar */}
        <form
          className="d-none d-md-flex flex-grow-1 mx-3"
          style={{ maxWidth: '600px' }}
        >
          <input
            className="form-control me-2 flex-grow-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>

        <div>
          {token ? (
            <div className="position-relative" ref={menuRef}>
              <img
                src={`http://localhost:3000/uploads/${user.image}`}
                alt="Profile"
                className="rounded-circle"
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                }}
                onClick={() => setShowMenu(!showMenu)}
              />

              {showMenu && (
                <div
                  className="position-absolute end-0 mt-2 bg-light border rounded shadow p-2"
                  style={{ zIndex: 1000, cursor: 'pointer' }}
                >

                  <div><p className='text-center text-danger'>{`${user.f_name}`}</p></div>
                  <div
                    className="dropdown-item"
                    onClick={() => navigate('/Cart')}
                  >
                    <p>Cart</p>
                    <hr className="border border-1 border-primary" />
                  </div>

                  <div
                    className="dropdown-item"
                    onClick={() => navigate('/My-Orders')}
                  >
                    <p>My Orders</p>
                    <hr className="border border-1 border-primary" />
                  </div>

                  <button
                    className="btn btn-danger text-white mt-2"
                    onClick={handeLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="btn btn-white text-white border-success"
              onClick={() => navigate('/Auth')}
            >
              Login/SignUp
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
