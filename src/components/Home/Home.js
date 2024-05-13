import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/246_cleanup-removebg-preview.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from 'react-parallax-tilt';

function Home() {
  return (
    <section >
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content" style={{position:"relative"}}>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Ram Ram !{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                🙌
                </span>
              </h1>

              <h1 className="heading-name">
                Myself
                <strong className="main-name">{" "}RK_Deepak Verma</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
             
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
             
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
