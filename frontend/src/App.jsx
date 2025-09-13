import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Registration from "./pages/Registration.jsx";
import ZnotFound from "./pages/ZnotFound.jsx";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";

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
    </>
  );
}

export default App;
