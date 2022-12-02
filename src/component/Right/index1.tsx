import"./index1.css"
import images from '../../assets/images.png'

function Rightside(){
    return(
        <div className="Rightside">
            <div className="head">
            <h3>Already a member?</h3>
            <button  className="login">LOGIN</button> 
            </div>
          <div>
<img src={images} alt="" className="image"/>
          </div>
   
        </div>
    )

}
export default Rightside;
