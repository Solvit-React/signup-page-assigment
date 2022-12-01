import { FormEventHandler, useState } from "react";
import "./index.css";
type Props = {
    name: string,
    label: string,
    type?: string
}
const TextFieldInput = ({
    name, label, type = "text"
}: Props) => {

    let [value, setValue] = useState("");

    const _inputValueChanged: FormEventHandler<HTMLInputElement> = (evt) => {
        const input = evt.target as HTMLInputElement;
        setValue(input.value);
    }
    
    const tansform = value == "" ? "" : "transform";
    
    return <div className={`text-field ${tansform}`}>
        <input onInput={_inputValueChanged} type={type} id={name} name={name} />
        <label htmlFor={name}>{label}</label>
    </div>
}
export default TextFieldInput;
