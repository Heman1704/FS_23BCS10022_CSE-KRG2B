import React from "react";

function Child({ message }) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Message: {message}</p>
    </div>
  );
}

export default Child;
