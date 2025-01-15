import React from 'react'
import './login.css'

import { login, signup } from '../../firebase'
import logo from '../../assets/mainlogo.png'
import { useState } from 'react'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")

  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

  //user authentication function
  const user_auth = async (event) => {
    event.preventDefault();
    if(signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  } 

  return (
    <div className='login'>
      <img src={logo} alt="website logo" className='logos' />
      <div className="form">
        <h1>{signState}</h1>
        <form >
          {
            signState === "Sign Up" ? <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} placeholder='Full Name' /> : <></>
          }
          
          <input type="email" placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}} />
          <input type="password" placeholder='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
          <button onClick={user_auth} type='submit' >{signState}</button>

          <div className="help">
            <div className="remenber"><input type="checkbox" /> <label htmlFor="">Keep Me Signed In</label> </div>
            <p>Need Help?</p>
          </div>

        </form>
        <div className="switch">
          {
            signState === "Sign In" ?
            <p>New To Kode Movies? <span onClick={() => {setSignState("Sign Up")}}>Sign Up Now</span></p> :
            <p>Already Have an Accoubt? <span onClick={() => {setSignState("Sign In")}}>Sign In</span></p> 
          }
          
          
        </div>
      </div>
    </div>
  )
}

export default Login