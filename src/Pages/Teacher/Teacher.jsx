import React, { useEffect, useState } from 'react';
import './TeacherStyle.css';
function Teacher() {
  
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('api/teams');
      const data = await response.json();
      setTeams(data);
    };

    fetchTeams();
  }, []);

  return (
    <>
    <div className='team-section h-[100%]  mt-11'>
      <div className="team-title">
        <h1>فريق العمل</h1>
      </div>
      <div className="team-cards">
        {teams.map((Team) => (
          <div className="team-card" key={Team.id}>
            <div className="team-image">
              <img src={`/storage/${Team.pic}`} alt={Team.name} />
            </div>
            <div className="team-detail">
              <h3>{Team.name}</h3>
              <p>{Team.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Teacher;