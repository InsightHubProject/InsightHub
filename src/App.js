import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Analysis from './pages/Analysis';
import Reports from './pages/Reports';
import AboutUs from './pages/AboutUs';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
