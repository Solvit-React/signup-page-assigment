
import reactLogo from './assets/react.svg'
import './App.css'
import CreateAccount from './component/create-account/index'
import DevImage from './component/dev-image/index2'


function App() {

  return (
  <div className='App'>
    
     <div className='form'> 
     <CreateAccount/>
      <DevImage/>
      </div> 
  </div>
  );
}

export default App
