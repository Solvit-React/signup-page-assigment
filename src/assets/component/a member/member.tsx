import React from 'react'
import  image from '../assets/image.jpg'
import'./member.css'

function Member(){

    return(

<div className="Member">

    
    <span className="login-text "> Already a member</span>
    <button className="login-button">LOGIN</button>
    <img src={image} alt="" className="image" />
</div>
)}

export default Member ;