import React from 'react'
import './home.css'
import Navbar from '../Navbar/Navbar'
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../images/img_bg_1.jpeg';
import Img2 from '../images/img_bg_2.jpeg';
import Img3 from '../images/men.jpeg';
import Button from 'react-bootstrap/Button';
import second from '../images/women.jpeg'
import first from '../images/item-15.jpeg'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import shoes1 from '../images/item-1.jpeg'
import banner from '../images/banner_1.png'
import banner1 from '../images/banner_4.png'
import banner2 from '../images/banner_2.png'
import banner3 from '../images/banner_3.png'
// import run from '../images/custom_banner_image_1.jpeg'
import store from '../images/shoe_store_1.jpeg'
import brand1 from '../images/brand-1.jpeg'
import brand2 from '../images/brand-2.jpeg'
import brand3 from '../images/brand-3.jpeg'
import brand4 from '../images/brand-4.jpeg'
import brand5 from '../images/brand-5.jpeg'
import Footer from '../Footer/Footer';


function Home() {
  return (
    <>

      <Navbar />

      {/* Section 1 */}
      <div className='fluid'>

        <Carousel fade>
          <Carousel.Item>
            <img src={Img1} className='main_img w-100' alt='Img1'/>
            <Carousel.Caption className='homeimg'>
              <h1 >MEN'S</h1>
              <p className='fs-3'> SHOES</p>
              <p className='fs-2'>COLLECTION</p>
              <Button variant="secondary">SHOP COLLECTION</Button>{' '}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Img2} className='main_img w-100' alt='Img2' />
            <Carousel.Caption className='homeimg'>
              <h1>HUGE</h1>
              <p className='fs-3'>SALE</p>
              <p className='fs-2'>50% OFF</p>
              <Button variant="secondary">SHOP COLLECTION</Button>{' '}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Img3} className='main_img w-100' alt='Img3' />
            <div >
              <Carousel.Caption className='homeimg'>
                <h1>NEW</h1>
                <p className='fs-3'>
                  ARRIVAL
                </p>
                <p className='fs-2'>UP TO 30% OFF</p>
                <Button variant="secondary">SHOP COLLECTION</Button>{' '}
              </Carousel.Caption>
            </div>
            
          </Carousel.Item>
        </Carousel>

      </div>

      {/* section 2 */}

      <div className='container-fluid '>
        <div className='row  '>
          <div className='col-md-12 text-center p-5'>
            <h2 className='section-two-txt'><b>It started with a simple idea: Create quality,</b> <br /><b> well-designed products that I wanted myself.</b></h2>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 p-2'>
            <div>
              <img src={first} className='section2' alt='first'/>
              <h2 className=' section-two-txt'>Shop Men's Collection</h2>
            </div>
          </div>
          <div className='col-md-6'>
            <div>
              <img src={second} className='section2' alt='second' />
              <h2 className=' section-two-txt'>Shop Women's Collection</h2>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}

      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
      <h2 className='bestseller'><b>BEST SELLER</b></h2>

          </div>

        </div>

        <div className="row">
          <div className="col-md-3">
   <Card className='card-contain'  >
          <Card.Img variant="top" src={shoes1} alt='img'/>
          <Card.Body>
            <Card.Text className='text-center'>
              Women's Boots Shoesguygb uygy Maca
            </Card.Text>
            <div className='card-rupee'>
              <del> $5000 </del>
              <p>$2000</p>
            </div>
          </Card.Body>
        </Card>
          </div>
          <div className="col-md-3">
   <Card className='card-contain'  >
          <Card.Img variant="top" src={shoes1} />
          <Card.Body>
            <Card.Text className='text-center'>
              Women's Boots Shoesguygb uygy Maca
            </Card.Text>
            <div className='card-rupee'>
              <del> $5000 </del>
              <p>$2000</p>
            </div>
          </Card.Body>
        </Card>
          </div>

          <div className="col-md-3">
   <Card className='card-contain'  >
          <Card.Img variant="top" src={shoes1} />
          <Card.Body>
            <Card.Text className='text-center'>
              Women's Boots Shoesguygb uygy Maca
            </Card.Text>
            <div className='card-rupee'>
              <del> $5000 </del>
              <p>$2000</p>
            </div>
          </Card.Body>
        </Card>
          </div>

          <div className="col-md-3">
   <Card className='card-contain'  >
          <Card.Img variant="top" src={shoes1} />
          <Card.Body>
            <Card.Text className='text-center'>
              Women's Boots Shoesguygb uygy Maca
            </Card.Text>
            <div className='card-rupee'>
              <del> $5000 </del>
              <p>$2000</p>
            </div>
          </Card.Body>
        </Card>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12">
           <Button className=' btn1' variant="secondary">SHOP ALL PRODUCTS</Button>{' '}
          </div>
        </div>
      </div>

     
      {/* section 4 */}
      <div className="container mt-5">
        <div className="row">
          <div  className="col-md-7">
            <img id="banner" src={banner} alt='banner' />
            
            <div className="row mt-3">
              <div className="col-md-6">
                <img id="banner2" src={banner2}  alt='banner2'/>
              </div>
              <div className="col-md-6">
                <img id="banner3" src={banner3} alt='banner3'/>
              </div>
            </div>
          </div>
          <div className="col-md-5">
              <img id="banner1" src={banner1}  alt='banner1'/>
          </div>
        </div>
      </div>

      {/* section 5 */}
      
    
       <div className="container-fluid mt-5">
        <div className="row p-0 m-0">
             <div className="backimg ">
            <h1 className='bgtext text-center mt-5'>Running with you <br /> force of nature</h1>
            <h4 className=' text-center text-light mt-5 fs-4'>Bring your wardrobe up to speed with Autumn/Winter 2020: <br /> shop transitional pieces, all with 20% off</h4>
             <Button id="bgbtn" variant="light">SHOP NOW</Button>{' '}

          </div>
       </div>
 
      </div>
  
      {/* section 6 */}
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

      
      {/* section 7 */}
      <div className="container">
        <div>
          <h3 className='partner text-center'>Trusted Partners</h3>
        </div>
        <div className='section7 row mt-5'>
          <img src={brand1} alt='brand1' />
          <img src={brand2} alt='brand2'/>
          <img src={brand3} alt='brand3' />
          <img src={brand4} alt='brand4' />
          <img src={brand5} alt='brand5' />
        </div>
      </div>

  
      <Footer/>

    </>
  )
}

export default Home
