/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthUser } from 'react-auth-kit'
import './Playground.scss';

import Switcher from "react-switch";

import CodeEditor from '../widgets/CodeEditor';

import { Row, Col, Stack } from 'react-bootstrap';

const Playground = (props) => {
    
    const auth = useAuthUser()
    const iframe = React.createRef();
    const [ js, setJs ] = useState(' '); 
    const [ css, setCss ]= useState(' ');
    const [ html, setHtml ]  = useState(' ');
    const [ bootstrapcss, setbootstrapCss ] = useState(' ');
    const [ bootstrapjs, setbootstrapJs ] = useState('');
    const [ jqueryjs, setjQueryJs ] = useState('');
    const [ bootstrapcheck, setbootstrapCheck ] = useState(false);
    const [ jquerycheck, setjqueryCheck ] = useState(false);
    const [ workspaceRan, setWorkspaceRan ] = useState(false);
    const [ currentWorkspaceP, setCurrentWorkspaceP ] = useState({});
    const [ defaultValues, setDefaultValues ] = useState(
                                                          {
                                                            html: '<!-- some comment -->',
                                                            js: '// some comment',
                                                            css: '/* some comment */'
                                                          }
                                                        );

    let headers;
    let getAllWorkspaces = () => {};

    if(props.authified){
      headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${auth().token}` 
      }

      getAllWorkspaces = () => {
        axios.get(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_WORKSPACE_GET_ALL}/${auth().username}`, {
          headers: headers
        })
        .then((res)=>{
          if(res.status == 200 || res.status == 201) {
            props.setWorkspaces(res.data);
            setWorkspaceRan(true); 
            let bigdate;
            let bigdata = res.data[0];
            let loopamt = res.data.length;
            for (let i = 0;  i < loopamt; i++) {
              let loopdate;
              if(i===0) bigdate = new Date(res.data[i].wstimestamp);
              else loopdate = new Date(res.data[i].wstimestamp)
              if(loopdate>bigdate){
                bigdate = loopdate;
                bigdata = res.data[i];
              }
              console.log(i);
              
              if(i===loopamt-1) {
                setCurrentWorkspaceP(bigdata);
                props.setCurrentWorkspace(bigdata);
                if(bigdata.parsedhtml.trim()) {
                  setHtml(bigdata.parsedhtml);
                  setDefaultValues({...defaultValues, html: bigdata.parsedhtml})
                }
                if(bigdata.parsedcss.trim()) { 
                  setCss(bigdata.parsedcss);
                  setDefaultValues({...defaultValues, css: bigdata.parsedcss})
                }
                if(bigdata.parsedjs.trim()) { 
                  setJs(bigdata.parsedjs);
                  setDefaultValues({...defaultValues, js: bigdata.js})
                }
              }
            }
          }
        })
      }
    }

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

    let runCode = () => {
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
    }

    useEffect(() => {
        runCode();
        if(props.setData){
          props.setData({
            'html' : html,
            'css' : css,
            'js' : js
          })
        }
        if(props.authified && !workspaceRan) getAllWorkspaces();
    }, ['', bootstrapcss, css, html, js, jqueryjs, bootstrapjs]);

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
        <Row>
          {props.tutorial &&
            <Col>
              <section className="tutorial">
                
              </section>
            </Col>
          }
          <Col xs={6}>
            <section className="playground">
              <Stack>
                <div className="code-editor html-code">
                  <div className="editor-header">HTML   
                    <label>
                      <Switcher onChange={handleBootstrapChange} checked={bootstrapcheck}  />
                    </label>
                    <label> 
                      <Switcher onChange={handlejQueryChange} checked={jquerycheck} />
                    </label>
                  </div>
                  <CodeEditor code="html" default={defaultValues.html}setItem={setHtml} />
                </div>
                <div className="code-editor css-code">
                  <div className="editor-header">CSS</div>
                  <CodeEditor code="css" default={defaultValues.css} setItem={setCss} />
                </div>
                <div className="code-editor js-code">
                  <div className="editor-header">JAVASCRIPT</div>
                  <CodeEditor code="javascript" default={defaultValues.js} setItem={setJs} />
                </div>
              </Stack>
            </section>
          </Col>
        <Col>
          <section className="result">
            <iframe title="result" className="iframe" ref={iframe} />      
          </section> 
        </Col>
      </Row>
      </>
    )
}

export default Playground;

