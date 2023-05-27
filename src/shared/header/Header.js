import React from 'react';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.scss';
import logo from '../../assets/img/h-logo.jpg';
import { Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {


	const menuItems = <>
	
	<Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">services</Nav.Link>
            <Nav.Link href="#">shop</Nav.Link>
            <Nav.Link href="#">gallery</Nav.Link>
            <Nav.Link href="#">page</Nav.Link>
            <Nav.Link href="/contact">contacts</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
	</>
    return (
        <>
		<header id="hdeader">
		<div className='top_header'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 col-md-6 col-sm-12 text-start'>
						<ul>
							<li><Link to=''><FaEnvelope /> cycleity@gmail.com</Link></li>
							<li><Link to=''><FaPhoneAlt /> +9123 456 87</Link></li>
						</ul>
					</div>
					<div className='col-lg-6 col-md-6 col-sm-12 text-end'>
						<ul>
							<li><Link to=""><FaHeart /></Link></li>
							<li><Link to="/login"><FaUser /></Link></li>
							<li><Link to=""><FaShoppingCart /></Link></li>
						</ul>
					</div>
				</div>
			</div>

		</div>
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt=''/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           {menuItems}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	</header>
        </>
    );
};

export default Header;