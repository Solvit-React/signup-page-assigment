import './sign-up.css'
const SignupPage = () => {
return(
<div className="container">
    <div className="head">
<h1>Create Account</h1>
<p>create a greate platform for managing your cases & client</p>
</div>
<form action="" className='form'>
<div className="form-group">
   <input type="text" placeholder="Full Name" /> 
   <input type="text" placeholder="Organization Name" /> 
</div>
<div className="form-group">
<input type="Email" placeholder="Email" /> 
   <input type="tel" placeholder="Phone Number" /> 
</div>
<input type="password" placeholder="Password" className="pssw"/>
</form>
<button className="signup-button">SIGN UP</button>
</div>
);
}
export default SignupPage;