import React from 'react';
import './App.css';


// Importing Authentication
import { AuthProvider } from 'react-auth-kit'
import { useIsAuthenticated } from 'react-auth-kit';

//Bootstrap Import
import { Container } from 'react-bootstrap';

//Router Import
import {
  HashRouter as Router,
  Route,
  Switch
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
              <Route path='/'><Playground /></Route>
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
              <Route path='/Login'><Login /></Route>
              <Route path='/Signup'><Signup /></Route>
              <Route path='/'><Playground /></Route>
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
