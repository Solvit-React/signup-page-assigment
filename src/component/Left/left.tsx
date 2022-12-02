import "./left.css"



function Left(){
    return(




<div className="left">
            <div className="header">
            <h1>Create Account</h1>
            <p>create a great platform for managing your cases and client</p>
            </div>
            <form action="" className="form">
            <div className="input-container">
                <input type="text" name="fullname*" placeholder="fullname"/>
                <input type="email" name="email" placeholder="email" id="email"/>
                
                </div>
                <div className="email-container">
                <input type="text" name="organization name*" placeholder="oragnization name"/>
                    <input type="number" name="phone number" placeholder="+250"/>
                    </div>
                    </form> 
                    <div className="password">
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                    <div className="signup">
                        <button>SIGN UP</button>
                    </div>
                    
                    
            
        </div>
    
     
     )
    }
    export default Left;
     