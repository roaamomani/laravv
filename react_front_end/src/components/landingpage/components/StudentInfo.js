import React from 'react';
import './StudentInfo.css'; 

const StudentInfo = () => {
  const student = {
    name: "Heba ",
    age: 24,
    major: "Fine Arts",
    school: "Art School of Orange",
    year: "Third Year",
    favoriteArtStyle: "Abstract Painting",
    notableWorks: ["The Colors of Life", "Abstract Dreams", "Visionary Waves"],
  };

  return (
    
    <div className="student-info-container">

      <div className="student-info-content">

        
        <div className="student-main-info">
          <h2>{student.name}</h2>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Major:</strong> {student.major}</p>
          <p><strong>School:</strong> {student.school}</p>
          <p><strong>Year:</strong> {student.year}</p>
        </div>
        
        
        <div className="student-art-info">
          <h3>Artistic Profile</h3>
          <p><strong>Favorite Art Style:</strong> {student.favoriteArtStyle}</p>
          <h4>Notable Works:</h4>
          <ul>
            {student.notableWorks.map((work, index) => (
              <li key={index}>{work}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
