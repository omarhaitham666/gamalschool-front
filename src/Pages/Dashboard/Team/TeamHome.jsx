// import React from 'react'
import './TeamStyle.css'
// import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import API from '../../../../src/Services/Api';
import '../Team/TeamStyle.css';
import { Link } from 'react-router-dom';


function TeamHome() {
  
    
    
    {/* <div className='text-center mt-12 '>
        <Link to="/teamCreate" className='btn text-white text-2xl border px-5 py-2.5 rounded-full bg-white text-black hover:bg-indigo-950 hover:text-white duration-200 transition-all ease-out'>
           اضافة
        </Link>
    <div className='table  mt-10'>
   
      <table>
        <thead>
          <tr>
            <td>التسلسل</td>
            <td>الاسم</td>
            <td>الصورة</td>
            <td>العنوان</td>
            <td>احداث</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>عمر</td>
            <td><img src="../../../../public/images/240966687_1641621706037203_6680141127474876692_n.jpg" alt="" className=''/></td>
            <td>مهندس</td>
            
          </tr>
          <tr>
            <td>1</td>
            <td>عمر</td>
            <td><img src="../../../../public/images/240966687_1641621706037203_6680141127474876692_n.jpg" alt="" /></td>
            <td>مهندس</td>
           
          </tr>
          <tr>
            <td>1</td>
            <td>عمر</td>
            <td><img src="../../../../public/images/240966687_1641621706037203_6680141127474876692_n.jpg" alt="" /></td>
            <td>مهندس</td>
           
           
          </tr>
          <tr>
            <td>1</td>
            <td>عمر</td>
            <td><img src="../../../../public/images/240966687_1641621706037203_6680141127474876692_n.jpg" alt="" /></td>
            <td>مهندس</td>
        
            
          </tr>
          
          <tr>
            <td>1</td>
            <td>عمر</td>
            <td><img src="../../../../public/images/240966687_1641621706037203_6680141127474876692_n.jpg" alt="" /></td>
            <td>مهندس</td>
           
          </tr>
        </tbody>
      </table>
    </div>
    
    </div> */}
    
    


  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await API.get('api/teams');
      setTeams(response.data);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  const deleteTeam = async (id) => {
    try {
      await API.delete(`api/teams/${id}`);
      fetchTeams();
    } catch (error) {
      console.error('Error deleting team:', error);
    }
  };

  return (
    // <div className='team-home'>
    //   <Link to="/teamCreate">
    //   create
      
    //   </Link>
    //   <h1>أعضاء الفريق</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>التسلسل</th>
    //         <th>الاسم</th>
    //         <th>الصورة</th>
    //         <th>العنوان</th>
    //         <th>أحداث</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {teams.map((team) => (
    //         <tr key={team.id}>
    //           <td data-label="التسلسل">{team.id}</td>
    //           <td data-label="الاسم">{team.name}</td>
    //           <td data-label="الصورة">
    //             {team.image && (
    //               <img
    //                 src={`http://localhost:8000/storage/${team.image}`}
    //                 alt={team.name}
    //                 className='profile-image'
    //               />
    //             )}
    //           </td>
    //           <td data-label="العنوان">{team.position}</td>
    //           <td data-label="أحداث">
    //             <button onClick={() => deleteTeam(team.id)} className='btn delete-button'>حذف</button>
    //             {/* يمكنك إضافة زر تعديل هنا */}
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div className='team-home'>
      <Link to="/teamCreate" className='btn create-button text-white'>
        إضافة عضو جديد
      </Link>
      <h1>أعضاء الفريق</h1>
      <table className="teacher-table">
        <thead>
          <tr>
            <th>التسلسل</th>
            <th>الاسم</th>
            <th>الصورة</th>
            <th>العنوان</th>
            <th>أحداث</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td data-label="التسلسل">{team.id}</td>
              <td data-label="الاسم">{team.name}</td>
              <td data-label="الصورة">
                {team.pic ? (
                  <img
                    src={`http://localhost:8000/storage/${team.pic}`}
                    alt={team.name}
                    className='profile-image'
                  />
                ) : (
                  'لا توجد صورة'
                )}
              </td>
              <td data-label="العنوان">{team.title}</td>
              <td data-label="أحداث">
                {/* إضافة زر تعديل هنا في المستقبل */}
                <button onClick={() => deleteTeam(team.id)} className='btn delete-button'>
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );




  
  
}

export default TeamHome;


