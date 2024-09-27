

import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'; // استيراد Link و Routes
// import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import './DashStylesheet.css';
import TeamHome from './Team/TeamHome';
// استيراد الصفحات الأخرى حسب الحاجة

function AdminDashboard() {
  return (
<div className='flex flex-row-reverse'>
    <div className="admin-dashboard">
      {/* ............sidebar......... */}
      <section className='dash-sec'>
        <nav className="sidebar">
          <header>
            <h2 className='text-center text-white dash-text'>Admin Dashboard</h2>
          </header>
          <div className='text-center text-white'>
            <ul className='flex flex-col mt-6 gap-8 text-2xl'>
              <li>
                <Link to="/AdminDashboard/overview" className="nav-link">الصفحة الرئيسية</Link>
              </li>
              <li>
                <Link to="/teamhome" className="nav-link">فريق العمل</Link>
              </li>
              <li>
                <Link to="/AdminDashboard/achievements" className="nav-link">الانجازات</Link>
              </li>
              <li>
                <Link to="/AdminDashboard/tabletService" className="nav-link">خدمة التابلت</Link>
              </li>
              <li>
                <Link to="/AdminDashboard/uniformService" className="nav-link">خدمة الزي</Link>
              </li>
              <li>
                <Link to="/AdminDashboard/messages" className="nav-link">الاستفسارات والشكاوى</Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>

      {/* المحتوى الرئيسي للصفحات */}
      <div className="dashboard-content">
       
        <Routes>
          <Route path="/AdminDashboard/teamhome" element={<TeamHome />} />
          <Route path="/AdminDashboard/overview" element={<div>محتوى الصفحة الرئيسية</div>} />
          <Route path="/AdminDashboard/achievements" element={<div>محتوى الإنجازات</div>} />
          <Route path="/AdminDashboard/tabletService" element={<div>محتوى خدمة التابلت</div>} />
          <Route path="/AdminDashboard/uniformService" element={<div>محتوى خدمة الزي</div>} />
          <Route path="/AdminDashboard/messages" element={<div>محتوى الاستفسارات والشكاوى</div>} />
        </Routes>
      </div>
    </div>
    </div>

  );
}

export default AdminDashboard;
