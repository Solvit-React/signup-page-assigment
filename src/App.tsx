import React from 'react';

import './App.css';
import LoginPage from './components/index';
import SignupPage from './routes/sign-up';

function App(){

  return <div className='App'>
    <SignupPage/>

    <LoginPage/>
  </div>
}

export default App