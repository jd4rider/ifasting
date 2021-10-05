import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

//Import Authentication
import { useAuthUser } from 'react-auth-kit'
import { useSignOut } from 'react-auth-kit'

import {Link} from 'react-router-dom';

const linkstyle = {
    'color': 'inherit',  
    'text-decoration': 'inherit'
}

const Topnavnoauth = () => {
    const auth = useAuthUser()

    const signOut = useSignOut()

    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
            <Navbar.Brand href={process.env.REACT_APP_PUBLIC_URL}>JDPlayground</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link><Link to={process.env.REACT_APP_PUBLIC_URL} style={linkstyle}>Home</Link></Nav.Link>
            <Nav.Link><Link to={process.env.REACT_APP_PUBLIC_URL + 'Features'} style={linkstyle}>Features</Link></Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
                <NavDropdown menuAlign="right" title={`Hello Random User`} id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to={process.env.REACT_APP_PUBLIC_URL + 'Signup'} style={linkstyle}>Signup</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to={process.env.REACT_APP_PUBLIC_URL + 'Login'} style={linkstyle}>Login</Link></NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
        </>
    );
}

export default Topnavnoauth