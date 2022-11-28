import TextFieldInput from "../text-field";
import "./style.css";
const CreateAccountForm = () =>{
    return <div className="create-account-form">
        <TextFieldInput name="fullName" label="Full name" />
        <TextFieldInput name="Emai" label="Email" />
    </div>
}

export default CreateAccountForm;