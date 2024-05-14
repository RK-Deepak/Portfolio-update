import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/tech.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Me and Web Development is in love with each other and I think,I m good at some of the tech-stack🤔
              <br />
              <br />I am good in classics like
              <i>
                <b className="purple"> C++, Javascript  </b>
               
              </i>
              <br></br>
              And Currently Learning 
              <i>
              <b className="purple"> TypeScript & Next.js</b>
              </i>
              <br />
              <br />
              My area of affection and Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                apart from that I'm a{" "}
                <b className="purple">
                  Stock Market Trader
                </b>
              </i>
              <br />
              <br />
              I love to develop products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Reach Me Out</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RK-Deepak"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
           
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/deepak-verma-21b497159/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
