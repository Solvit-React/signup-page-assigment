import "./index.css"

function Leftside(){
    return(
        <div className="sign-up" >
        <div className="header">
            <h1>create Account</h1>
            <h3> create a great platform for mananging your cases& client</h3>
        </div>
        <form className="form1">
        <div className="container">
            <input type="text" placeholder="Full Name*"  ></input>
            <input type="text" placeholder="organisation Name"></input>
            </div>
           <div className="container">
           <input  type="email" placeholder="Email Adress"></input>
            <input type="text"placeholder="Mobile Number "></input>
           </div>
           

           <div className="password"> 
            <input type="password"placeholder="password"></input>
           </div>
           <button className="signup">SIGNUP</button>
           </form>
        </div>
    );

    
}
export default Leftside;