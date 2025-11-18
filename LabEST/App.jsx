import React from "react";
import EmployeeFilter from "./EmployeeFilter";

function App() {
  const employees = [
    { name: "Hemant" },
    { name: "Aryan" },
    { name: "Aditya" },
    { name: "Saksham" },
    { name: "Vaibhav" }
  ];

  return (
    <div>
      <EmployeeFilter employees={employees} />
    </div>
  );
}

export default App;
