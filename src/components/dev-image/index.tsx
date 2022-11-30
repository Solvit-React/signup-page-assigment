import "./style.css";
import image from "../../assets/image.png"
const DevImage = () => {
    return(<div className="dev-image">
        <span className='login-text'>Already a member?</span>
        <button className='login-btn'>LOGIN</button>
        <img src={image} alt="" />
    </div>
    )
}
export default DevImage;