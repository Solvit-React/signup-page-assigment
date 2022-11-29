import React from 'react'
import './style.css'
import Image from '../assets/undraw_Programmer_re_owql.png';



function LoginPage() {
  return (
    <div className='LoginPage'>
        <span className='login-text'>Already a member?</span>
        <button className='login-btn'>LOGIN</button>

        <div className='myimage'>
        <img src={Image} alt="" className='image'/>
        </div>
    </div>
  )
}

export default LoginPage