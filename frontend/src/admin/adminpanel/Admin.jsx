// import { useState } from 'react'
import './Admin.css'
import Header from "../header/Header"
import Slidebar from "../slidebar/Slidebar"
import Home from "../home/Home"

function Admin() {
  return (
      <div className='grid-container d-flex'>
          <Header />
          <Slidebar />
          <Home/>
          
    </div>
  )
}

export default Admin