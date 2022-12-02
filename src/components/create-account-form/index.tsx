
import TextFieldInput from "../text-field";
import "./style.css";

function Left() {
    return ( 
    <div className='left'>
    <div className='header-text'>
        <h1>Create Account</h1>
        <p>Create a great platform for managing your cases & clients</p>
    </div>
    <form action="" className='form'>
        <div className='input-container'>
            <TextFieldInput name='fullname' type='text' label='Full Name*' />
            <TextFieldInput name='organizationName' type='text' label='Organization Name' />
        </div>
        <div className='input-container'>
            <TextFieldInput name='email' type='email' label='Email Address*' />
            <TextFieldInput name='telephone' type='tel' label='Phone Number' />
        </div>
        <div className="pswd">
        <TextFieldInput name='password' type='password' label='Password*' />
        </div>
    </form>
    <button className='signup-btn'>SIGN UP</button>
</div>
    )
}

export default Left; 