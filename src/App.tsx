import { useState } from 'react'
import SignupPage from "./routes/signup";
import './App.css'
import CreateAccountForm from './components/create-account-form';
import DevImage from './components/dev-image';

function App() {

  return (
    <SignupPage>
      <CreateAccountForm />
      <DevImage />
    </SignupPage>
  ) 
}

export default App
