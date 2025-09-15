import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Registration from "./pages/Register.jsx";
import ZnotFound from "./pages/ZnotFound.jsx";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="*" element={<ZnotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
