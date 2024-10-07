import { useEffect, useState } from "react";
import "./AchievementStyle.css";

function Achievement() {
  const [achievements, setAchievements] = useState([]);
  useEffect(() => {
        const fetchAchievements = async () => {
          try {
            const response = await fetch('/api/achievements');
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setAchievements(data);
          } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
          }
        };
    
        fetchAchievements();
      }, []);

  return (
    <div className="body h-[100%]">
      <div id="card-idea">
        <div className="wrapper">
          <div className="box-area">
            {/* {achievements.map((achievement) => ( */}
            {achievements.length === 0 ? (
              <div>لا توجد إنجازات لعرضها.</div>
            ) : (
              achievements.map((achievement) => (
              <div className="box" key={achievement.id}>
                <img src={`/storage/${achievement.pic}`} alt="" />
                <div className="overlay">
                  <h3>{achievement.name}</h3>
                  <p>{achievement.title}</p>
                </div>
              </div>
                ))
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;