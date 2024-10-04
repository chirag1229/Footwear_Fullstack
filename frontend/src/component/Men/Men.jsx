import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import shoes1 from '../images/item-1.jpeg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Men() {
  return (
    <div>
      
      <Navbar/>

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
      
<Footer/>

    </div>
  )
}
