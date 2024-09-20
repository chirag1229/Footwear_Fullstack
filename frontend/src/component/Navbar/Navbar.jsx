import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

function NavScrollExample() {
    return (
        <>
            <div className='container-fluid '>
                <div className='row pt-4 mb-4 '>
                    <div className='col-md-6 text-center'>
                        <h2 className='footwear'>Footwear</h2>
                    </div>
                    <div className=' col-md-6 '>
                        <div className='col-md-6 col-sm-6 '>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-secondary rounded-circle" ><i class="fa-solid fa-magnifying-glass"></i></Button>
                            </Form>
                        </div>
                    </div>
                </div>
            
                <div className='row'>
                    <Navbar expand="lg">
                        <Container >
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="Navbar_menu me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="#action1" id='font' >HOME</Nav.Link>
                                    <NavDropdown title="MEN" id="navbarScrollingDropdown" >
                                        <NavDropdown.Item href="#action3" id='font'>Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4" id='font'>
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action3" id='font'>Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4" id='font'>
                                            Another action
                                        </NavDropdown.Item>

                                    </NavDropdown>
                                    <Nav.Link href="#action2" id='font' >WOMEN</Nav.Link>

                                    <Nav.Link href="#" id='font'>
                                        ABOUT
                                    </Nav.Link>
                                    <Nav.Link href="#" id='font'>
                                        CONTECT
                                    </Nav.Link>

                                </Nav>
                                <div className='cart' id='font'>
                                    <i class="fa-solid fa-cart-shopping fs-6"></i> {''} CART
                                </div>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
            </div>
           
            </div>

            <div className='container-fluid' id='summer'>
                <div className='row'>
                    <div className='col-md-12 text-center mt-2'>
                        <h4>Our biggest sale yet 50% off all summer shoes</h4>
                    </div>
                </div>

            </div>

         
        </>
    );
}

export default NavScrollExample;