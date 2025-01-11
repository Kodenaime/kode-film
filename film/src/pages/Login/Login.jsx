import React from 'react'
import './login.css'

import logo from '../../assets/mainlogo.png'
import { useState } from 'react'

const Login = () => {

  const [login, setLogin] = useState("Sign In")

  return (
    <div className='login'>
      <img src={logo} alt="website logo" className='logos' />
      <div className="form">
        <h1>{login}</h1>
        <form >
          {
            login === "Sign Up" ? <input type="text" placeholder='Full Name' /> : <></>
          }
          
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='password' />
          <button>{login}</button>

          <div className="help">
            <div className="remenber"><input type="checkbox" /> <label htmlFor="">Keep Me Signed In</label> </div>
            <p>Need Help?</p>
          </div>

        </form>
        <div className="switch">
          {
            login === "Sign In" ?
            <p>New To Kode Movies? <span onClick={() => {setLogin("Sign Up")}}>Sign Up Now</span></p> :
            <p>Already Have an Accoubt? <span onClick={() => {setLogin("Sign In")}}>Sign In</span></p> 
          }
          
          
        </div>
      </div>
    </div>
  )
}

export default Login