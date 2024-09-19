import React from 'react'
import Navbar from '../Navbar/Navbar'
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../images/img_bg_1.jpeg';
import Img2 from '../images/img_bg_2.jpeg';
import Img3 from '../images/men.jpeg';


function home() {
  return (
    <>
  
      <Navbar />

      {/* First Section */}
      <div className='fluid'>
        
          <Carousel fade>
            <Carousel.Item>
            <img src={Img1} className='w-100' />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={Img2} className='w-100' />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={Img3} className='w-100' />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        
      </div>


    </>
  )
}

export default home