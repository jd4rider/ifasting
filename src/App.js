import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Switcher from "react-switch";
import { BsBootstrap } from 'react-icons/bs';

// Importing Authentication
import { AuthProvider } from 'react-auth-kit'
import { useIsAuthenticated } from 'react-auth-kit';

//Bootstrap Import
import { Container, Row, Col} from 'react-bootstrap';

//Router Import
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";


import Playground from './sections/Playground';
import Login from './login/Login';
import Signup from './login/Signup';

//Navigation Import
import Navbar from './navigation/Navbar';
import Navbarnoauth from './navigation/NavbarNoAuth';

const AuthApp = () => {
  const isAuthenticated = useIsAuthenticated()


  if(isAuthenticated()){
    return (
      <>
        <Router>
          <Navbar />
          <Container fluid style={{paddingLeft: "0px", paddingRight: "0px", paddingTop: "56.4px"}}>
            <Switch>
              <Route path={process.env.REACT_APP_PUBLIC_URL}><Playground /></Route>
            </Switch>
          </Container>
        </Router>     
      </>
    );
  } 
  else {
    return (
      <>
        <Router>
          <Navbarnoauth />
          <Container fluid style={{paddingLeft: "0px", paddingRight: "0px", paddingTop: "56.4px"}}>
            <Switch>
              <Route path={process.env.REACT_APP_PUBLIC_URL + 'Login'}><Login /></Route>
              <Route path={process.env.REACT_APP_PUBLIC_URL + 'Signup'}><Signup /></Route>
              <Route path={process.env.REACT_APP_PUBLIC_URL}><Playground /></Route>
            </Switch>
          </Container>
        </Router> 
      </>
    )
  }
}

const App = () => {
  return (
    <AuthProvider authStorageType = {'localstorage'}
                  authStorageName={'_auth_t'}
                  authTimeStorageName={'_auth_time'}
                  stateStorageName={'_auth_state'}>
      <AuthApp />                
    </AuthProvider>
  )
}

export default App;
