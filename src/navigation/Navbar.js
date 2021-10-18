import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

//Import Authentication
import { useAuthUser } from 'react-auth-kit'
import { useSignOut } from 'react-auth-kit'

import {Link} from 'react-router-dom';

import ModalTJustice from '../widgets/Modal';

import './Navbar.scss'

let callModal = () => {}

const save = () => {
    callModal();
}

const load = () => {
    callModal();
}

const setModalHandlers = (call) => {
    callModal = call;
}

const Topnav = (props) => {
    const auth = useAuthUser()

    const signOut = useSignOut()

    return (
        <>
        <Navbar expand="lg" bg="dark" variant="dark" fixed="top" >
            <Navbar.Brand as={Link} to='/'>JDPlayground</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            {/* <Nav.Link as={Link} to='/' >Home</Nav.Link> */}
            <Nav>
                <NavDropdown menuAlign="right" title={`Workspace`} id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={() => save()}>Save</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => load()}>Load</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            {/* <Nav.Link as={Link} to="/Pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav>
                <NavDropdown menuAlign="right" title={`Hello ${auth().username}`} id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={() => signOut()}>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        <ModalTJustice title='Save Trigger' data={props.data} loader={props.loader} addrecord={false} setModalHandlers={setModalHandlers} />
        </>
    );
}

export default Topnav