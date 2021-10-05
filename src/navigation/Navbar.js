import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

//Import Authentication
import { useAuthUser } from 'react-auth-kit'
import { useSignOut } from 'react-auth-kit'

import {Link} from 'react-router-dom';

import './Navbar.scss'

const save = () => {
    alert('not implemented yet');
}

const load = () => {
    alert('not implemented yet');
}

const Topnav = () => {
    const auth = useAuthUser()

    const signOut = useSignOut()

    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
            <Navbar.Brand as={Link} to='/'>JDPlayground</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={Link} to='/' >Home</Nav.Link>
            <Nav>
                <NavDropdown menuAlign="right" title={`File`} id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={() => save()}>Save</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => load()}>Load</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav.Link as={Link} to="/Pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
                <NavDropdown menuAlign="right" title={`Hello ${auth().username}`} id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={() => signOut()}>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
        </>
    );
}

export default Topnav