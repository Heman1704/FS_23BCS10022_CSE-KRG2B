import React, { useState } from "react";

const EmployeeFilter = ({ employees }) => {
  const [query, setQuery] = useState("");

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().startsWith(query.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Arial", width: "300px" }}>
      <h3>Employee Search</h3>

      <input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <ul>
        {filteredEmployees.map((emp, index) => (
          <li key={index}>{emp.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeFilter;
