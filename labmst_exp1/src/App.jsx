import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "px-3 py-2 rounded-md bg-indigo-600 text-white"
      : "px-3 py-2 rounded-md text-indigo-700 hover:bg-indigo-500 hover:text-white";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-gray-100 border-b">
        <div className="max-w-4xl mx-auto flex items-center gap-4 p-4">
          <h1 className="text-xl font-bold text-indigo-600">RoutingApp</h1>
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1 max-w-4xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={<p className="text-center text-gray-500">Page not found</p>}
          />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        © 2025 RoutingApp
      </footer>
    </div>
  );
}

export default App;
