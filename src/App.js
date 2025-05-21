import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/HomePage';
import Register from './components/Register';
import Login from './components/Login';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>

      </Routes>
    </Router>
  );
}

export default App;
