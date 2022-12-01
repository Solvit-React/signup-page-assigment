// import React from 'react'
// import Input from './Input/Input'
// import TextFieldInput from '../textfield'
// import './Index.css'

// function Left() {
//   return (
//     <div className='left'>
//         <div className='header-text'>
//             <h1>Create Account</h1>
//             <p>Create a great platform for managing your cases & clients</p>
//         </div>
//         <form action="" className='form'>
//             <div className='input-container'>
//                 <Input name='fullname' type='text' placeholder='Full Name*' />
//                 <Input name='organizationName' type='text' placeholder='Organization Name*' />
//             </div>
//             <div className='input-container'>
//                 <Input name='email' type='email' placeholder='Email Address*' />
//                 <Input name='telephone' type='tel' placeholder='Phone Number*' />
//             </div>
//             <Input name='password' type='password' placeholder='Password*' />
//         </form>
//         <button className='signup-btn'>SIGN UP</button>
//     </div>
//   )
// }

// export default Left


import TextFieldInput from "../textfield";
import "./Index.css";
const CreateAccountForm = () =>{
    return <div className="create-account-form">
        <h1><b>Create Account</b></h1>
        <p>Create a great platform for managing your cases & clients</p>
        
        <div className="create-account">
        <TextFieldInput name="fullName" label="Full name*" />
        <TextFieldInput name="Organisation Name" label="Organisation Name" />
        </div>
        
        <div className="create-account2">
        <TextFieldInput name="email" label="Email Address*"/>
        <TextFieldInput type="number" name="Mobile Number" label="Mobile Number"/>
        </div>
        <div className="password">
             <TextFieldInput type="password" name="password" label="Password*"/>
        </div>
     
        <button className="signup-btn">SIGN UP</button>
    </div>
}

export default CreateAccountForm;