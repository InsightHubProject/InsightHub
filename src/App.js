import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Analysis from './pages/Analysis';
import Reports from './pages/Reports';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </>
  );
}

export default App;
