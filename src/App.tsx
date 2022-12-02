import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Left from './component/leftside/left'
import Right from './component/rightside/right'

function App() {
  return (
    <div className="App">
      <Left />
      <Right />
    </div>
  )
}
export default App;