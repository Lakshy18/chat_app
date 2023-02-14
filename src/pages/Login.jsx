import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Gotu Talks</span>
            <span className='title'>Login</span>
            <form >
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Sign In</button>
            </form>
            <p>You do'nt have Account? Register</p>
        </div>
    </div>
  )
}

export default Login