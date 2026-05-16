import { useState } from 'react'


import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './components/Home'
import CardPizza from './components/CardPizza'
import Footer from './components/Footer'

import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'

import Pizza from './components/Pizza'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='estructura'>
    
    <Navbar/>

    <Home/>
    <Pizza/>

    <Footer/>

   </div>
    </> 
  )
}

export default App