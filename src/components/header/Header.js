import { Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router , Link,Routes, Route } from 'react-router-dom';
function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top">
      <Navbar.Brand href="/">
        
        {' Hospital UI'}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{flex:2,flexDirection:"row",justifyContent:'space-between'}}>
        <Nav className="mr-auto ml-4">
          {/* <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/doctors">Doctors</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link> */}
        </Nav>
        <Nav className="ml-auto"  >
          {/* <Button variant="outline-light" className="mr-2"  >Login</Button>{''}
          <Button varian t="light">Sign Up</Button> */}
          

            <Link to ="/Login"> <Button variant="outline-light" className="mr-2"  >Login</Button></Link>
            <Link to ="/SignUp"> <Button variant="light">SignUp</Button></Link>
        
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
