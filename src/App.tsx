
import SignupPage from "./routes/signup";
import './App.css'
import Left from './components/create-account-form';
import Right from './components/dev-image';

function App() {

  return (
    <SignupPage>
      <Left />
      <Right />
    </SignupPage>
  ) 
}

export default App
