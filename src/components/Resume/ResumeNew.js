import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/ResumeUpdated.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Tilt from "react-parallax-tilt"
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FaFileDownload } from "react-icons/fa";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  return (
    <div>
      
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="info"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "230px" }}
          >
            <FaFileDownload />
            &nbsp;Download CV
          </Button>
        </Row>
       
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
       
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="success"
           
            target="_blank"
            style={{ maxWidth: "230px" }}
          >
         
            &nbsp;Thanks
          </Button>
        </Row>
      </Container>
     
    </div>
  );
}

export default ResumeNew;
