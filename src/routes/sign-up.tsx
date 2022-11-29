import './sign-up.css'

const SignupPage = () => {
  return (


  <div className='SignupPage'>
  <div className='header'>
      <h1>Create Account</h1>
      <p>Create a great platform for managing your cases & clients</p>
  </div>
  <form action="" className='form'>
      <div className='input-container'>
          <input type='text' placeholder='Full Name*' required/>
          <input type='text' placeholder='Organization Name*' required/>
      </div>
      <div className='input-container'>
          <input type='email' placeholder='Email Address*' required/>
          <input type='number' placeholder='Phone Number*' />
      </div>
      <div className='password'>
      <input type='password' placeholder='Password*' />
      </div>
  </form>
  
  <button className='signup-btn'>SIGN UP</button>
</div>

)
}


export default SignupPage;