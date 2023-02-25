import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path='/' element={<LoginPage />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
