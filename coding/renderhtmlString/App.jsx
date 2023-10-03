import React from "react";
import ReactDOM from "react-dom";

function App() {
  const data = "<b>Amol gaikwad</b>";
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
