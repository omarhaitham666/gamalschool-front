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
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import TeamHome from "./Pages/Dashboard/Team/TeamHome";
import TeamCreate from "./Pages/Dashboard/Team/TeamCreate";




function App() {
  const{user}=useContext(AppContext);
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
          <Route path="/Register" element={user?<Home />:<Register />} />
          <Route path="/Login" element={user?<Home />: <Login /> } />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/teamHome" element={<TeamHome />} />
          <Route path="/teamCreate" element={<TeamCreate />} />


        </Routes>
      
      <Footer />
      
     
    
    </>
  );
}

export default App;
