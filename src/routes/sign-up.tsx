// import './sign-up.css'

// const SignupPage = () => {
//   return (


//   <div className='SignupPage'>
//   <div className='header'>
//       <h1>Create Account</h1>
//       <p>Create a great platform for managing your cases & clients</p>
//   </div>
//   <form action="" className='form'>
//       <div className='input-container'>
//           <input type='text' placeholder='Full Name*' required/>
//           <input type='text' placeholder='Organization Name*' required/>
//       </div>
//       <div className='input-container'>
//           <input type='email' placeholder='Email Address*' required/>
//           <input type='number' placeholder='Phone Number*' />
//       </div>
//       <div className='password'>
//       <input type='password' placeholder='Password*' />
//       </div>
//   </form>
  
//   <button className='signup-btn'>SIGN UP</button>
// </div>

// )
// }


// export default SignupPage;

import TextFieldInput from "../components/texfield";

import "./sign-up.css";
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