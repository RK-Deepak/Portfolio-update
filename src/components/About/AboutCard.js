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
            I am a full stack developer and also a business man(Mum&Daughter).
            <br />
            I have completed B.Tech from DIT University(Dehradun).
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
