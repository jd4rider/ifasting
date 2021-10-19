import { Navbar, Nav, NavDropdown } from 'react-bootstrap';




import {Link} from 'react-router-dom';


const Topnavnoauth = () => {

    return (
        <>
        <Navbar expand={false} bg="dark" variant="dark" fixed="bottom" >
            <Navbar.Brand as={Link} to='/'>iFasting</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            
            </Nav>
            <Nav>
                <NavDropdown menuAlign="right" title={`Hello Random User`} id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to='/Signup'>Signup</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/Login'>Login</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
}

export default Topnavnoauth;