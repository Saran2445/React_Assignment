import React from 'react';

function Skills({ skills }) {
  return (
    <section id="skills" className="skills">
      <div className="title">
        <h2>My Skills</h2>
      </div>
      <div className="box">
        {skills.map((skill, index) => (
          <div key={index} className="card">
            <h3>{skill.name}</h3>
            <div className="skill-info">
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;