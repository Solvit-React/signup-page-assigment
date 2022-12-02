
import "./style.css";
import img from '../../assets/image.jpg'

declare module "*.jpg";

const Right = () => {

    return(
     
     <div className='right'>
    <span className='login-text'>Already a member?</span>
    <button className='login-btn'>LOGIN</button>
   <img src={img} alt="" className="img"/>
</div>

)

}
export default Right;