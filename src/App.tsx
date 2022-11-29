
import './App.css';


function App() {

  return (
    <div className="container">
      <form>
        <h1>CREATE ACCOUNT</h1>
        <h4>create a big platform for managing your cases & clients</h4>
        <div className="container2">
        <div className="part1">
        <div className="field1">
          <label>Full name</label><br />
          <input type="text" name='Full-name' placeholder='Fullname' />
        </div>
        <div className="field1">
          <label>Email address</label><br />
          <input type="text" name='Email-address' placeholder='Email Address' />
        </div>
        </div>
        <div className="part2">
        <div className="field1">
          <label>Organization Name</label><br />
          <input type="text" name='Organization-name' placeholder='Organization name' />
        </div>
        <div className="field1">
          <label>Phone number</label><br />
          <input type="text" name='phone-number' placeholder='Phone number' />
        </div>
        </div>
        </div>
        <div className="field2">
          <label>Password</label><br />
          <input type="password" name='Password' placeholder='Password' />
        </div>
        <button type='submit' className='signupbutton'>SIGNUP</button><br />
      </form>
      <div className="rightside">
        <h3>Already a member?</h3>
        <button type='submit' className='loginbtn'>LOGIN</button>
        
      </div>
    </div>
  )
}
export default App;
