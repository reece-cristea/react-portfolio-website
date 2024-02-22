import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import './pages.css';


const AboutMe = () => {
  return (
    <div className='banner my-2 fade-in' style={{ minHeight: "100vh" }}>
      <img src='https://rcportfolioimages.s3.us-west-1.amazonaws.com/reece.jpg' className="rounded-3 shadow-lg banner-img" alt="Picture of Reece"></img>
      <div className="banner-content">
        <h2>Hi, I'm Reece!</h2>
        <p style={{ maxWidth: "780px" }}>
          I am an entry level software engineer/developer looking to get some hands-on experience in the field.
          I specialize in front end application development, but I welcome all challenges that any project will pose.
        </p>
        <Accordion>
          <Accordion.Item eventKey="0" style={{ alignItems: "center" }}>
            <Accordion.Header>Education</Accordion.Header>
            <Accordion.Body>
              <div className="accordion-body">
                I graduated from <i>Champlain College</i> in Burlington, Vermont with a <strong> major in Computer Science and Innovation and a minor in Mathematics</strong>.
                My curriculum had me learning the foundations of programming from the very first semester and continued to advance my knowledge and skills to the point where
                I was able to build my own application or website for any platform at the end of my senior year. My time at school provided invaluable experience and insights 
                into the many intricacies of software development and I am eager to begin my career in computer programming and innovation. Below are some of the more notable 
                courses I completed while at Champlain College:
              </div>
              <div className="row mx-3 mb-3">
                <div className="col text-start">
                  <li><em>Intro to Mobile and Web Development</em></li>
                  <li><em>Data Structures and Algorithms</em></li>
                  <li><em>Open Source Software Development</em></li>
                  <li><em>Network Programming</em></li>
                  <li><em>Database Management and Systems</em></li>
                  <li><em>Linux/Unix Programming</em></li>
                </div>
                <div className="col text-start">
                  <li><em>Computer Architecture</em></li>
                  <li><em>Android Development</em></li>
                  <li><em>Advanced Programming</em></li>
                  <li><em>Emerging Programming Languages</em></li>
                  <li><em>Software Refactoring</em></li>
                  <li><em>Vector Calculus</em></li>
                  <li><em>Matrices, Vectors, and 3D Math</em></li>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Technologies</Accordion.Header>
            <Accordion.Body>
              <div className="accordion-body" style={{ display: "table" }}>
                Throughout my time in college and among the various projects I've completed and worked on, I have used a multitude of various programming languages 
                and tools, most of which I've been able to apply in a professional setting. Below is a list of said technologies:
              </div>
              <div className="row mx-3 mb-3">
                <div className="col text-start">
                  <li><em>HTML5</em></li>
                  <li><em>CSS3</em></li>
                  <li><em>JavaScript</em></li>
                  <li><em>Bootstrap</em></li>
                  <li><em>React.js</em></li>
                  <li><em>Node.js</em></li>
                  <li><em>SQL</em></li>
                </div>
                <div className="col text-start">
                  <li><em>C#</em></li>
                  <li><em>C++</em></li>
                  <li><em>Python</em></li>
                  <li><em>Java</em></li>
                  <li><em>Dart</em></li>
                  <li><em>Flutter SDK</em></li>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Hobbies</Accordion.Header>
            <Accordion.Body>
              <div className="accordion-body">
                Some of my interests, aside from computer science, include video games, cars, Japanese culture, working out, and music. During my time in college, I played
                for three different varsity esports teams (Overwatch, Valorant, and Rocket League). This experience provided me with a deep understanding of teamwork and
                emphasized the crucial role of communication in achieving success. Additionally, I have been casually studying Japanese for a year now and can engage in
                conversations on basic topics. Music plays a significant role in my life, and I enjoy listening to it during various activities such as working out,
                playing games, working on projects, driving, and even while sleeping at times. My favorite genres would probably be EDM, Japanese Rock, Lofi, and Indie Pop.
                Looking ahead, my ultimate career goal is to work as a front-end web developer. I really enjoy the different aspects and challenges web development has to offer
                and my aim as a web developer would be to make the online experience as simple and as pleasant as it can be for users who don't really have a lot of technical experience.
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default AboutMe