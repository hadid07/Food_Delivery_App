import React from 'react'

const Login = () => {
  return (
    <div>
        <div className='border border-2 border-warning border-rounded'>
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder='Enter UserName' />
                <input type="text" placeholder='Enter Password' />
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login