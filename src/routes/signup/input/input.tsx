
import "./input.css";
import img from '../../../assets/img.jpg'

declare module ".jpg"

const Input = () => {
  
return (
 
    <div className="container1">
      < span className="login-txt">Already a member?</span>
      <button className="login-btn"> LOGIN </button>
      <img src={img} alt="" className="picture"/>
</div>
)
}
export default Input;