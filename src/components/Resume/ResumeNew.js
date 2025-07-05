import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
// import pdf from "../../Assets/../Assets/Satyam_Jaiswal_Resume.pdf";
import { AiOutlineDownload, AiFillFilePdf } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// import Footer from "../Footer";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", alignItems: "center", minHeight: "70vh" }}>
          <div className="resume-card">
            <div className="resume-pdf-icon">
              <AiFillFilePdf size={64} color="#e53e3e" />
            </div>
            <div className="resume-header">
              <h1>My <span className="text-gradient">Resume</span></h1>
              <div className="resume-tagline">Download my latest resume (PDF)</div>
              <Button
                variant="primary"
                href="/Satyam_Jaiswal_Resume.pdf"
                target="_blank"
                className="resume-download-btn"
                download
              >
                <AiOutlineDownload />
                &nbsp;Download Resume
              </Button>
            </div>
            <div className="resume-content">
              <p>My resume highlights my experience, skills, and projects. Click the button above to download or view the PDF.</p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
