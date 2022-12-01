import React from "react"
import'./login left.css'

function Left(){
    return(

<div className="Left">
    <div className="login-header">
        <h1>Create Account</h1>
        <p>Create a great platform</p>
    </div>
    <form action="" className="forrm">
        <div className="input-container">
            
            <input type="text" name="fullname" placeholder="fullname" />
            <input type="text" name="origanization name*" placeholder="orginization name" />
        </div>
        <div className="input-container-email">
        <input type="Email" name="email*"  placeholder="email" id=" email"/>
        <input type="phone number" name="number*" placeholder="+250" />
        <div className="PIN">
        <input type="password" placeholder="password" />
        </div>
        </div>
        <div className="sign-up">
            <button>SignUp</button>
            
        </div>
    </form>
</div>
)}
export default Left;


