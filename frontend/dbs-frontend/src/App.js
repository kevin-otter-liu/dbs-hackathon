import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
// import CreatePage from './pages/CreateFormPage';
import EditPage from './pages/EditPage';
import React from "react";
import CreateFromPage from "./pages/CreateFromPage";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/Edit' element={<EditPage />} />
          <Route path="/create" element={<CreateFromPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
