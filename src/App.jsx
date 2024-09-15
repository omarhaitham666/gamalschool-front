import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Header/Navbar";
import Home from "./Pages/Home/Home";
import Teacher from "./Pages/Teacher/Teacher";
import Services from "./Pages/Services/Services";
import Achievement from "./Pages/Achievement/Achievement";
import Footer from "./Component/Footer/Footer";
import Login from "./Pages/Login/Register";
import Register from "./Pages/Login/Login";
import TabletService from "./Pages/Services/TabletService";
import Report from "./Pages/Services/Report";
import Uniform from "./Pages/Services/Uniform";


function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/services" element={<Services />} />
          <Route path="/TabletService" element={<TabletService />} />
          <Route path="/ReportService" element={<Report />} />
          <Route path="/UniformService" element={<Uniform />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />

        </Routes>
      <Footer />
    </>
  );
}

export default App;
