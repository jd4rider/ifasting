import React, {useState} from 'react';
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


import Main from './sections/Main';
import Unauth from './sections/Unauth';
import Login from './login/Login';
import Signup from './login/Signup';

//Navigation Import
import Navbar from './navigation/Navbar';
import Navbarnoauth from './navigation/NavbarNoAuth';

const AuthApp = () => {
  const isAuthenticated = useIsAuthenticated()
  const [ globalData, setGlobalData ] = useState({});
  const [ workspaces, setWorkspaces] = useState([]);
  const [ currentWorkspace, setCurrentWorkspace] = useState({});


  if(isAuthenticated()){
    return (
      <>
        <Router>
          <Navbar data={globalData} workspaces={workspaces} currWorkspace={currentWorkspace} setCurrentWorkspace={setCurrentWorkspace} loader={()=>{}} />
          <Container fluid style={{paddingLeft: "0px", paddingRight: "0px", paddingTop: "56.4px", width: "400px"}}>
            <Switch>
              <Route path='/'><Main tutorial={false} setData={setGlobalData} currentWorkspace={currentWorkspace} setWorkspaces={setWorkspaces} setCurrentWorkspace={setCurrentWorkspace} authified={true} /></Route>
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
              <Route path='/'><Unauth /></Route>
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
