import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaPhone } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto d-flex  w-100">
          <Nav.Link as={Link}  className="nav-link" activeClassName="active">
            <FaHome className="mr-1" to={'/home'} /> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/products" className="nav-link" activeClassName="active">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="nav-link" activeClassName="active">
            <FaShoppingCart className="mr-1" /> My Bids
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link" activeClassName="active">
            <FaPhone className="mr-1" /> Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand  className="ml-auto">My Fair Price</Navbar.Brand> {/* ml-auto to align to the right */}
    </Navbar>
  );
};

export default NavigationBar;
