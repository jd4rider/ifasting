import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


import {Link} from 'react-router-dom';


const Topnavnoauth = () => {

    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
            <Navbar.Brand as={Link} to='/'>JDPlayground</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
                <NavDropdown menuAlign="right" title={`Hello Random User`} id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to='/Signup'>Signup</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/Login'>Login</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
        </>
    );
}

export default Topnavnoauth;