import React, { useState } from 'react'
import './App.css';
import Header from './Compoment/Header';
import LiveChat from './Compoment/LiveChat';
import Navbar from './Compoment/Navbar';
import Promosyon from './Compoment/Promosyon';
const App = () => {
  const [navbaropen, setNavbaropen] = useState(false)
  console.log(navbaropen)

  return (
    <>
       <Header
        setNavbaropen={setNavbaropen}
        navbaropen={navbaropen}
        />

       <Navbar
       navbaropen={navbaropen}
       />

       <Promosyon />
        
       <LiveChat />
    </>
  )
}

export default App
