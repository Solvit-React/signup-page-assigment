import "./style.css";
import img from '../../assets/image.jpeg'
const DevImage = () => {
    return <div className="dev-image">
        <span className='login-text'>Already a member?</span>
        <button className='login-btn'>LOGIN</button>
        <img src={img} alt="" className='img'/>
    </div>
}
export default DevImage;