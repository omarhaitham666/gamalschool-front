

import React, { useEffect, useState } from 'react';
import './TeacherStyle.css';
function Teacher() {
  
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/teams');
      const data = await response.json();
      setTeams(data);
    };

    fetchTeams();
  }, []);

  return (
    <>
    
    {/* <div className='team-section h-[100%] '>
      <div className="team-title">
        <h1>فريق العمل</h1>
      </div>
      <div className="team-cards ">
       

        <div className="team-card">
          <div className="team-image">
            <img src="images/images.jpeg" alt="" />
          </div>
          <div className="team-detail">
            <h3> عمر</h3>
            <p>مدرس اللغة العربية</p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src="images/images.jpeg" alt="" />
          </div>
          <div className="team-detail">
            <h3> عمر</h3>
            <p>مدرس اللغة العربية</p>
          </div>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img src="images/images.jpeg" alt="" />
          </div>
          <div className="team-detail">
            <h3> عمر</h3>
            <p>مدرس اللغة العربية</p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src="images/images.jpeg" alt="" />
          </div>
          <div className="team-detail">
            <h3> عمر</h3>
            <p>مدرس اللغة العربية</p>
          </div>
        </div>
        
       
      </div>
    </div> */}














  
    <div className='team-section h-[100%]'>
      <div className="team-title">
        <h1>فريق العمل</h1>
      </div>
      <div className="team-cards">
        {teams.map((Team) => (
          <div className="team-card" key={Team.id}>
            <div className="team-image">
              <img src={`storage/${Team.pic}`} alt={Team.name} />
            </div>
            <div className="team-detail">
              <h3>{Team.name}</h3>
              <p>{Team.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
















{/* <div className='team-section min-h-[100vh] flex flex-col items-center py-10'>
  <div className="team-title mb-10">
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">فريق العمل</h1>
  </div>
  
  <div className="team-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
  

    <div className="team-card bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <div className="team-image mb-4">
        <img src="./images/images.jpeg" alt=" عمر" className="w-32 h-32 rounded-full object-cover" />
      </div>
      <div className="team-detail text-center">
        <h3 className="text-xl font-semibold text-gray-800">Omar Haytham</h3>
        <p className="text-gray-600">Developer</p>
      </div>
    </div>

    <div className="team-card bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <div className="team-image mb-4">
        <img src="./images/images.jpeg" alt=" عمر" className="w-32 h-32 rounded-full object-cover" />
      </div>
      <div className="team-detail text-center">
        <h3 className="text-xl font-semibold text-gray-800">Omar Haytham</h3>
        <p className="text-gray-600">Developer</p>
      </div>
    </div>
    <div className="team-card bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <div className="team-image mb-4">
        <img src="./images/images.jpeg" alt=" عمر" className="w-32 h-32 rounded-full object-cover" />
      </div>
      <div className="team-detail text-center">
        <h3 className="text-xl font-semibold text-gray-800">Omar Haytham</h3>
        <p className="text-gray-600">Developer</p>
      </div>
    </div>
    
    
   
  </div>
</div> */}

    
    
    </>
  )
}

export default Teacher;