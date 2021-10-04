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


import CodeEditor from './widgets/CodeEditor';
import Login from './login/Login';

//Navigation Import
import Navbar from './navigation/Navbar';
import Sidebar from './navigation/Sidebar';

const AuthApp = () => {
  const isAuthenticated = useIsAuthenticated()

  
  
  const iframe = React.createRef();
  const [ js, setJs ] = useState(' '); 
  const [ css, setCss ]= useState(' ');
  const [ html, setHtml ]  = useState(' ');
  const [ bootstrapcss, setbootstrapCss ] = useState(' ');
  const [ bootstrapjs, setbootstrapJs ] = useState('');
  const [ jqueryjs, setjQueryJs ] = useState('');
  const [ bootstrapcheck, setbootstrapCheck ] = useState(false);
  const [ jquerycheck, setjqueryCheck ] = useState(false);

  

  const turnOnBootstrap = (checked) => {
    setbootstrapCss('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">');
    setbootstrapJs('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>');
    setbootstrapCheck(checked);
  }

  const turnOffBootstrap = (checked) => {
    setbootstrapCss('');
    setbootstrapJs('');
    setbootstrapCheck(checked);
  }

  const turnOnjQuery = (checked) => {
    setjQueryJs('<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>');
    setjqueryCheck(checked);
  }

  const turnOffjQuery = (checked) => {
    setjQueryJs('');
    setjqueryCheck(checked);
  }

  let runCode = () => {}

  useEffect(() => {
    runCode();
  });

  if(isAuthenticated()){

  runCode = () => {
    const iframeItem = iframe.current;
    const document = iframeItem.contentWindow.document;
    const documentContents = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        ${bootstrapcss}
        <style>
          ${css}
        </style>
        ${jqueryjs}
      </head>
      <body>
        ${html}

        <script type="text/javascript">
          ${js}
        </script>
        ${bootstrapjs}
      </body>
      </html>
    `;

    document.open();
    document.write(documentContents);
    document.close();
  };

  const handleBootstrapChange = (checked) => {
    if(checked) turnOnBootstrap(checked);
    else turnOffBootstrap(checked);
  }

  const handlejQueryChange = (checked) => {
    if(checked) turnOnjQuery(checked);
    else turnOffjQuery(checked); 
  }

  
  
  return (
    <>
      <Router>
        <Navbar />
        <Container fluid style={{paddingLeft: "0px", paddingRight: "0px", paddingTop: "56.4px"}}>
          <section className="playground">
            <div className="code-editor html-code">
              <div className="editor-header">HTML   
                <label>
                  <Switcher onChange={handleBootstrapChange} checked={bootstrapcheck}  />
                </label>
                <label> 
                  <Switcher onChange={handlejQueryChange} checked={jquerycheck} />
                </label>
              </div>
              <CodeEditor code="html" default="<!-- some comment -->" setItem={setHtml} />
            </div>
            <div className="code-editor css-code">
              <div className="editor-header">CSS</div>
              <CodeEditor code="css" default="/* some comment */" setItem={setCss} />
            </div>
            <div className="code-editor js-code">
              <div className="editor-header">JAVASCRIPT</div>
              <CodeEditor code="javascript" default="// some comment" setItem={setJs} />
            </div>
          </section>
          <section className="result">
            <iframe title="result" className="iframe" ref={iframe} />      
          </section> 
        </Container>
      </Router>     
    </>
  );
} 
else {
  return (
    <>
      <Login />
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
