import "./index.css"
import Input from "./props/Props"
function CreateAccount () 

{
return(
<div  className="SignUp">
    <div className="header">
    <h1> create account</h1>
    <h3> create a great platform for managing your cases & clients</h3>
    </div>
    <form className="form1" >
    <div className="input-container" >
   <Input type='text'  name="" placeholder='Full Name*'/>
   <Input type='text'  name="" placeholder='Organization Name'/>
    </div>

    <div className="input-container1">
    <Input type='email'  name="" placeholder='Email Address*'/>
   <Input type='number'  name="" placeholder='Mobile Number'/>

    </div>

    <Input type='password'  name="" placeholder='password*'/>
    </form>
    
<button className="button"> SIGN UP </button>
</div>

    

);
}
export default CreateAccount;