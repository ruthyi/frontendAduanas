import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Forgot } from '../pages/Forgot'

function FirstRoute() {

  return (
    <main >
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </main>
  )
}

export default FirstRoute
