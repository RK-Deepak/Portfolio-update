import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import gym from "../../Assets/Projects/iron_gym.png";
import projects27 from "../../Assets/Projects/27.jpg";
import studyAdda from "../../Assets/Projects/studyAdda.png";
import youtube from "../../Assets/Projects/youtubedude.png";
import rk_google from "../../Assets/Projects/rk-google.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{position:"relative"}}>
        <h1 className="project-heading">
          My Major And Minor <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
         List of some  projects,on which I worked from scratch.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studyAdda}
              isBlog={false}
              title="StudyAdda"
              description=" I've crafted an immersive educational platform with React.js frontend and Node.js backend. Implementing JWT-based authentication and ZegoCloud technology, I've ensured secure user access and real-time video calling features, fostering collaborative learning. With a focus on scalability and performance, I've integrated Redux for state management and Docker for containerization, enabling seamless user experiences and future scalability."
              ghLink="https://github.com/RK-Deepak/StudyAdda"
              demoLink="https://study-adda-tawny.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rk_google}
              isBlog={false}
              title="RK_Google"
              description="RK Google aClone is a frontend project emulating Google's interface, meticulously crafted by RK. It replicates key features such as the search bar functionality and search result layout using HTML, CSS, and JavaScript. With a focus on responsiveness, it ensures optimal user experiences across devices. This project underscores RK's proficiency in frontend development and attention to detail in replicating complex user interfaces"
              ghLink="https://github.com/RK-Deepak/rk_google"
              demoLink="https://rkgoogle.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="YouTube"
              description="
              The YouTube Clone frontend project replicates YouTube's interface, incorporating Firebase authentication and search functionalities. Built with React.js and Firebase, it offers a seamless user experience, enabling secure authentication and effortless video browsing. This project showcases adept frontend development skills, API integration, and attention to detail in mirroring YouTube's features."
              ghLink="https://github.com/RK-Deepak/YouTube2.0"
              demoLink="https://youtubedude.netlify.app/"              
            />
          </Col>

         

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="IRON-GYM"
              description="
              The gym website, crafted using HTML, CSS, and JS, offers dynamic features such as class schedules, trainer profiles, and membership registration. With responsive design, it ensures seamless user experiences across devices, motivating fitness enthusiasts to pursue their goals effectively"
              ghLink="https://github.com/RK-Deepak"
              demoLink="https://irongym.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projects27}
              isBlog={false}
              title="Minor Projects"
              description="
              Crafted 27 JavaScript and React minor, including a calculator, timer, and more, showcasing expertise in frontend development. Each project demonstrates proficiency in JavaScript and React, offering practical solutions to common challenges. From dynamic web applications to interactive user interfaces, these projects highlight versatility and dedication to innovation. With a focus on clean code and seamless user experiences"
              ghLink="https://github.com/RK-Deepak/JS_Mini_Projects-27-PROJECT-"
              // demoLink="https://github.com/RK-Deepak"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
