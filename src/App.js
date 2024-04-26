import "./App.css";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import Reports from "./pages/Reports";
import AboutUs from "./pages/AboutUs";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import ReportDetail from "./pages/ReportDetail";

import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/reports/:reportId" element={<ReportDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AuthProvider>
      <ScrollToTop />
    </>
  );
}

export default App;
