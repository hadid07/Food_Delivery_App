import React, { useState, useContext } from 'react';
import LoginContext from '../Contexts/LoginContext';
import axios from 'axios';

const Signup = () => {
  const { login, setLogin } = useContext(LoginContext);

  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    password: "",
    image: null,
  });

  const handlechange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('f_name', formData.f_name);
      data.append('l_name', formData.l_name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('password', formData.password);

      if (formData.image) data.append('image', formData.image);

      const response = await axios.post('http://localhost:3000/signup', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log("Success:", response.data);
      alert("Signup successful");
    } catch (err) {
      console.error("Signup error:", err);
      alert("Signup failed");
    }
  };

  return (
    <div className='row d-flex align-items-center justify-content-center vh-100'>
      <div className='d-flex mx-auto my-12 flex-column p-3 border col-10 col-md-8 col-lg-6 border-2 row border-warning rounded bg-light'>
        <h3 className='text-warning text-center'>SignUp</h3>
        <form className='d-flex flex-column p-3' onSubmit={handlesubmit}>
          <input
            name='f_name'
            className='m-2'
            type="text"
            placeholder='First Name'
            onChange={handlechange}
            value={formData.f_name}
            required
          />
          <input
            name='l_name'
            className='m-2'
            type="text"
            placeholder='Last Name'
            onChange={handlechange}
            value={formData.l_name}
            required
          />
          <input
            name='email'
            className='m-2'
            type="email"
            placeholder='Enter Your valid Email address'
            onChange={handlechange}
            value={formData.email}
            required
          />
          <input
            name='phone'
            className='m-2'
            type="text"
            placeholder='Enter your Phone Number'
            onChange={handlechange}
            value={formData.phone}
            required
          />
          <input
            name='password'
            className='m-2'
            type="password"
            placeholder='Enter Password'
            onChange={handlechange}
            value={formData.password}
            required
          />
          <label htmlFor="profile">Select Your Image (Optional):</label>
          <input
            type="file"
            id="profile"
            name="image"
            onChange={handlechange}
            accept="image/*"
          />
          <input className='m-2 btn btn-success' type="submit" value="SignUp" />
          <div className='d-flex flex-row mt-1'>
            <p>Already have account? </p>
            <p
              onClick={() => setLogin(!login)}
              className='text-primary cursor-pointer'
            >
              Login
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
