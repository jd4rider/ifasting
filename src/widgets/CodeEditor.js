import Editor from "@monaco-editor/react";



function CodeEditor(props) {
    const handleChange = (value, event) => {
        props.setItem(value)
    }
  return (
    <Editor
      height="31vh"
      defaultLanguage={props.code}
      defaultValue={props.default}
      theme="vs-dark"
      onChange={handleChange}
    />
  );
}

export default CodeEditor;