import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './pages/Login'
import { Registro } from './pages/Registro'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login/>
      
    </div>
  )
}

export default App
