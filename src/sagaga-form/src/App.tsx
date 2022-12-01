import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Left from './component/login form/login left';
import Member from './component/a member/member';
function App() {

  return (
    <div className='App'>
      <Left/>
      <Member/>
    </div>
   
  );
}

export default App
