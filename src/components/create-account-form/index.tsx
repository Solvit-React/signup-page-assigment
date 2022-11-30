import TextFieldInput from "../text-field";
import "./style.css";
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