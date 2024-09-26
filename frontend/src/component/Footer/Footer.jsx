import React from 'react'
import  './footer.css'

function Footer() {
  return (
    <>
      <div className="footer container d-flex g-1">
        <div className='part1' >
          <p><b> About Footwear</b></p>

          <p>Even the all-powerful <br /> Pointing has no control about <br /> the blind texts it is an <br /> almost unorthographic life</p>
          <div className='brandfont'>
            <i class="fa-brands fa-twitter fs-4"></i>
            <i class="fa-brands fa-facebook fs-4"></i>
            <i class="fa-brands fa-linkedin fs-4"></i>
            <i class="fa-brands fa-instagram fs-4"></i>

          </div>
        </div>
        <div className='part2' >
          <p><b>Customer Care</b></p>

          <p>Contact</p>
          <p>Returns/Exchange</p>
          <p>Gift Voucher</p>
          <p>Wishlist</p>
          <p>Special</p>
          <p>Customer Services</p>
          <p>Site maps</p>
        </div>
        <div className='part3'>
          <p><b>Information</b></p>

          <p>About us</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Support</p>
          <p>Order Tracking</p>
        </div>
        <div className='part4'>
          <p><b>News</b></p>

          <p>Blog</p>
          <p>Press</p>
          <p>Exhibitions</p>
        </div>
        <div className='part5'>
          <p><b>Contact Information</b></p>

          <p>291 South 21th Street,
            Suite 721 New York NY 10016</p>
          <p>+ 1235 2355 98</p>
          <p>info@yoursite.com</p>
          <p>yoursite.com</p>
        </div>
      </div>
    </>
  )
}

export default Footer
