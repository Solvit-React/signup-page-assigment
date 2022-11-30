import "./style.css";
import image from "../../assets/undraw_programming_re_kg9v.svg"
const DevImage = () => {
    return(<div className="dev-image">
        <span className='login-text'>Already a member?</span>
        <button className='login-btn'>LOGIN</button>
        <img src={image} alt="" className='img' />
    </div>
    )
}
export default DevImage;