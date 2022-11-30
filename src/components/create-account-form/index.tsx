import TextFieldInput from "../text-field";
import "./style.css";
const CreateAccountForm = () =>{
    return <div className="create-account-form">
        <h2>Create Account</h2>
        <p className="pi">Create a great platform for managing your cases & clients</p>
        <br />
        <div className="test1">
        <TextFieldInput name="fullName" label="Full name*" />
        <TextFieldInput name="Organization name" label="Organization name " />
        
        </div>
         <div className="test2">
         <TextFieldInput name="Email " label="Email  Address*" />
        <TextFieldInput type="number"name="Mobile Number" label="Mobile Number" />
        
    </div>
    <div className="pass">
    <TextFieldInput  type="password" name="password" label="Password*" />
    </div>
    <button className="btn">SIGN UP</button>
     </div>
}

export default CreateAccountForm;