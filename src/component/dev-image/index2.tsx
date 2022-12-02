import "./index2.css"
import image from '../../assets/image.jpg'
function DevImage () {
return(
    <div className="devimage">
        <div className="message">
            <h2>already a member?</h2>
        </div>
        <div>
            <button className="login"> LOGIN </button>
        </div>
        <div>
        <img src={image} alt="" className="proImage"/>
        </div>
    </div>
);
}
export default DevImage;