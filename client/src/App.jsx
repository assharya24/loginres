import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="parent">
      <Router>
        <div className="app-container">
          <h1 className="app-title">MERN Auth</h1>
          <div className="card">
            <Routes>
              <Route path="/" element={<Navigate to="/signup" />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
