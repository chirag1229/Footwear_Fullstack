import React from 'react'
import store from '../images/shoe_store_1.jpeg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function About() {
  return (
      <div >
          <Navbar/>

     <div className="container mt-5">
        <div className="section6 row" >
          <div  className="col-md-6">
            <img id="section6" src={store} alt='store' />
          </div>
          <div className="aboutfont col-md-6">
            <h2 className='aboutus'>About us</h2>
            <h3 className='aboutus fs-2'>We strive to make your life better!</h3>
            <p className='aboutus fs-5'>Step into style and comfort with the Urban Glide Sneakers. Designed for both everyday wear and weekend adventures, these sneakers feature a lightweight, breathable mesh upper that keeps your feet cool.</p>
            <h4 className='aboutus fs-5'>PHONE NO :- +91 85314XXXXX</h4>
            <h3 className='aboutus fs-5'>EMAIL ADD :- EXAMPLE123@gmail.com</h3>
          </div>
        </div>
          </div>

          


      <Footer/>    
    </div>
  )
}

export default About
