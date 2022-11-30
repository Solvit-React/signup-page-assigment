import TextFieldInput from "../text-field";
import "./style.css";
const CreateAccountForm = () =>{
    return (<div className="create-account-form">
         <div className='header-text'>
            <h1>Create Account</h1>
            <p>Create a great platform for managing your cases & clients</p>
        </div>
        <form action="" className='form'>
        <div className="container">
        <TextFieldInput name="fullName"  type="text" label="Full name*" />
        <TextFieldInput name="Organisation"  type="text" label="organisation name*" />
</div>
<div className="container">
        <TextFieldInput name="Email"  type="email" label="Email address*" />
        
        <TextFieldInput name="telphone number" label="telphonenumber*" type="number " />
        </div>
        <div className="container1">
        <TextFieldInput name="password" label="password*" type="password" /> 
            </div>
            </form>
        <button className='signup-btn'>SIGN UP</button>
        
    
    </div>)
}

export default CreateAccountForm;