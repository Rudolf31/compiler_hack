import React, { useState } from "react";

import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code, theme, isAnonymous}) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  const darkEditor = "vs-dark";
  const whiteEditor = "white-dark";

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={`${isAnonymous ? darkEditor : whiteEditor}`}
        defaultValue="// write your code here"
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default CodeEditorWindow;
