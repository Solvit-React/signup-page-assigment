import React, { useState } from 'react'
import { useState } from 'react';
import "./LoginSignupContainer.css"


const LoginSignupContainer = () => {
  const [login,setLogin]=useState(true);
  const [signup,setSignup]=useState(false);
  const handleClick=()=>{
    setLogin(!login);

  }

  return (
    <div className='Login-Signup-Container'>

      <div czlassName='sidd-div'>
        <button type='button' onClick={handleClick}>{login ? "Signup":"Login"}</button>
      </div>
    </div>
  )
}

export default LoginSignupContainer