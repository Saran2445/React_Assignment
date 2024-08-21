import React from 'react';

function Home() {
  return (
    <section id="home" className="section home">
      <div className="home-text">
        <h5>Hello, I'm Saran,</h5>
        <h1>Front End</h1>
        <h1>Web Developer</h1>
        <div className="button">
          <a href="files/resume.pdf" download="Saran_Kanaga_Sabapathy_Resume.pdf">Download CV</a>
        </div>
      </div>
      <div className="home-img">
        <img src="images/Profile_Photo1.jpeg" alt="Profile Picture" />
      </div>
    </section>
  );
}

export default Home;