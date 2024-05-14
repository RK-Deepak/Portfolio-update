import React from "react";
import Card from "react-bootstrap/Card";
import { FaHandPointRight } from "react-icons/fa";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">RK_Deepak Verma </span>
            from <span className="purple"> Hanumangarh (Rajasthan).</span>
            <br />
            I have around 3 years of experience as a <span className="purple">full-stack developer</span>from my tenure at Capgemini, where I developed expertise in both front-end and back-end technologies.
            <br></br>
            <br></br>
            Currently I'm engaged in our family business<span className="purple"> (Mum&Daughter).</span>
            <br></br>
            <br></br>
            I have completed B.Tech from<span className="purple"> DIT University(Dehradun).</span>
            <br />
          
            <br />
            Apart from business and coding , some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Online Gaming
            </li>
            <li className="about-activity">
            <FaHandPointRight />Reading Finctional Books
            </li>
            <li className="about-activity">
            <FaHandPointRight /> Travelling
            </li>
            <li className="about-activity">
            <FaHandPointRight /> Stock Market Trader
            </li>
          </ul>

          <p style={{ color: "#0b1fd1" }}>
            "Do something,which challenges u and brings u out of comfort zone!"{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: "#0b1fd1" }}>RK_Deepak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
