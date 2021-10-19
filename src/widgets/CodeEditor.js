import Editor from "@monaco-editor/react";



function CodeEditor(props) {
    const handleChange = (value, event) => {
        props.setItem(value)
    }
  return (
    <Editor
      height="28vh"
      defaultLanguage={props.code}
      value={props.default}
      theme="vs-dark"
      onChange={handleChange}
    />
  );
}

export default CodeEditor;