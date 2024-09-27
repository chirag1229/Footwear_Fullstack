import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./contact.css"



function Contact() {
  return (
    <div>
          <Navbar />
          

          {/* section1 */}
          
          <div className="container">
              <div className="row text-center mt-5">
                  <h2><strong>Contact Information</strong></h2>
              </div>
              <div className="contact row mt-5">
                  <div className="col-md-3">
                      <p><i class="bi bi-geo-alt-fill"></i> {""} 198 West 21th Street,
                            Suite 721 New York NY 10016</p>
                  </div>
                  <div className="col-md-3 text-center">
                      <p><i class="bi bi-telephone-fill"></i> {""}  +91 89456XXXXX</p>
                  </div>
                  <div className="col-md-3 text-center
                  ">
                      <p><i class="bi bi-envelope-at-fill"></i> {""}  info@yoursite.com</p>
                  </div>
                  <div className="col-md-3 text">
                      <p><i class="bi bi-globe"></i>   yoursite.com</p>
                  </div>
              </div>
          </div>
                <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <h2 className="mb-4">Get In Touch</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Your firstname"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Your lastname"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your email address"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Your subject of this message"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows={4}
            placeholder="Say something about us"
            defaultValue={""}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
                  </div>
                  <div className=" col-md-6">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74843700725!2d72.41493388340731!3d23.02047409694801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1727412993386!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>        
  </div>
                </div>

          <Footer/>
          
    </div>
  )
}

export default Contact
