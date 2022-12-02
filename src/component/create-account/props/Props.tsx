import './Props.css';

type InputProps = {
    type: string,
    placeholder: string,
    name: string,
    
   
}

function Input(props: InputProps) {
  return (
   <div> 
<input type={props.type} placeholder={props.placeholder}  />
</div>

  )
}

export default Input;