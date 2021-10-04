import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import CodeEditor from './widgets/CodeEditor';

function App() {
  const iframe = React.createRef();
  const [ js, setJs ] = useState(' '); 
  const [ css, setCss ]= useState(' ');
  const [ html, setHtml ]  = useState(' ');

  const runCode = () => {

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
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}

        <script type="text/javascript">
          ${js}
        </script>
      </body>
      </html>
    `;

    document.open();
    document.write(documentContents);
    document.close();
  };

  useEffect(() => {
    runCode();
  });

  return (
    <>
      <section className="playground">
        <div className="code-editor html-code">
          <div className="editor-header">HTML</div>
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
    </>
  );
}

export default App;
