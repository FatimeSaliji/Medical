import React from 'react'

import logo from "../assets/logo.png"
import { useLocalStorage } from '@uidotdev/usehooks'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'


export default function Header() {
    const [cart, setCart] = useLocalStorage('cart')
    const [user, setUser] = useLocalStorage('loggedin')
  
    const handleLogout = e => {
      e.preventDefault()
      setUser(undefined)
      window.location.href = 'http://localhost:3000/'
    }
    
  return (

    <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
          <Navbar.Brand><img src={logo}  className='ms-5' style={{width:'180px'}} alt=''/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav " >
              <Nav className="ms-auto navbar navbar-expand-lg   nav-underline justify-content-between me-5 fw-bold  " >
              
                <Nav.Link className="active fs-4" href="/" style={{color:'rgb(4, 190, 190)'}}>Home</Nav.Link>
                <Nav.Link className=" fs-4" href="/doctors" style={{color:'rgb(4, 190, 190)'}}>Doctors</Nav.Link>
                <Nav.Link className=" fs-4" href="/services" style={{color:'rgb(4, 190, 190)'}}>Services</Nav.Link>
              
                
                <NavDropdown  className=" fs-4"  title={user ? user.fullname : 'Guest'} id="basic-nav-dropdown" >
                  {
                    (user != undefined) ? <>
                    <NavDropdown.Item className=" fs-4" href="/login" style={{color:'rgb(4, 190, 190)'}}>Appointment</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  className=" fs-4" href="http://localhost:3000/" style={{color:'rgb(4, 190, 190)'}} onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                    </> : <>
                    <NavDropdown.Item href="/logiin" style={{color:'rgb(4, 190, 190)'}}>Login</NavDropdown.Item>
                    <NavDropdown.Item href="/register" style={{color:'rgb(4, 190, 190)'}}>Register</NavDropdown.Item>
                    </>
                  }
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    
   /* <nav className="navbar navbar-expand-lg  bg-body-tertiary mb-3">
    <div className="container ">
        <img src={logo}  className='ms-5' style={{width:'180px'}} alt=''/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-underline justify-content-between me-5 fw-bold" style={{ marginLeft: 'auto' }} >
                
                <li className="  nav-item" >
                    <Link to="/" className='nav-link active fs-4' style={{color:'rgb(4, 190, 190)'}} >Home</Link>
                </li>
                <li className="nav-item ">
                    <Link to="/Doctors" className='nav-link fs-4' style={{color:'rgb(4, 190, 190)'}}>Doctors</Link>
                </li>
                <li className="nav-item ">
                    <Link to="/Services" className='nav-link fs-4' style={{color:'rgb(4, 190, 190)'}}>Services</Link>
                </li>
                <li className="nav-item ">
                    <Link to="/Login" className='nav-link fs-4' style={{color:'rgb(4, 190, 190)'}}>Appoitment</Link>
                </li>
                <li className="nav-item ">
                    <Link to="/Logiin" className='nav-link fs-4' style={{color:'rgb(4, 190, 190)'}}>Login</Link>
                </li>
                
            </ul>
        </div>
    </div>
</nav>*/
  )
}



