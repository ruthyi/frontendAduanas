import React from 'react'
import { Routes, Route } from 'react-router-dom'

export const routes = () => {
  return (
    <Routes>
    <Route path='/' element={<NavFirst/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/otherService' element={<OtherServices/>}/>
      <Route path='/detail' element={<Details/>}/>
      <Route path='/sublimationPrint' element={<SublimationPrints/>}/>
      <Route path='/shopping-cart' element={<ShoppingCart/>}/>
      <Route path='*' element={<Error/>}/>
    </Route>
  </Routes>
  )
}
