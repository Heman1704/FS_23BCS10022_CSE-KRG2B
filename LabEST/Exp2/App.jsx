import React from "react";
import Parent from "./components/Parent";

function App() {
  const message = "Hello from App!";

  return (
    <div>
      <h1>App Component</h1>
      <Parent message={message} />
    </div>
  );
}

export default App;
