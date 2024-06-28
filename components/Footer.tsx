import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-transparent-800 pt-4 pb-2 border-t border-white">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs={12} sm={6} className="d-flex align-items-center" style={{ paddingRight: '15px' }}>
            <h1 style={{ color: "white", fontSize: '36px', paddingLeft: '20px', paddingRight: '15px' }}>VAV</h1>
          </Col>
          <Col xs={12} sm={6} className="text-end" style={{ paddingRight: '15px' }}>
            <div className="d-flex flex-column align-items-end">
              <div className="d-flex mb-2">
                <a
                  href="https://www.linkedin.com/in/vilhjalmur-arnar-vilhjalmsson/"
                  className="group relative inline-flex items-center justify-center h-12 w-12 rounded-full border border-white text-white bg-black hover:bg-white hover:text-black transition-all duration-300 me-2"  // Increased size to h-12 w-12
                >
                  <FaLinkedin className="h-8 w-8" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/villi02"
                  className="group relative inline-flex items-center justify-center h-12 w-12 rounded-full border border-white text-white bg-black hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaGithub className="h-8 w-8" aria-hidden="true" /> 
                </a>
              </div>
              <p className="text-gray-300 text-xs">
                Copyright 2023. All Rights Reserved Vilhjalmur Arnar Vilhjalmsson
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;