import React from 'react';

function Projects({ projects }) {
  return (
    <section id="projects" className="skills">
      <div className="title">
        <h2>My Projects</h2>
      </div>
      <div className="box">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.name}</h3>
            <div className="skill-info">
              <p>{project.description}</p>
              <p>Technologies: {project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;