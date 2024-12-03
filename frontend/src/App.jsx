import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import {Route ,Routes} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Card } from './pages/Home/Card/Card'
import { PlaceOrder } from './pages/Home/Card/PlaceOrder/PlaceOrder'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/PlaceOrder' element={<PlaceOrder/>}/>

      </Routes>

      
      
    </div>
  )
}

export default App
