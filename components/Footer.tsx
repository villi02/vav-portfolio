import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-transparent-800 pt-4 border-t border-white">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs={12} sm={6}>
            <h1 style={{ color: "white" }}>VAV</h1>
          </Col>
          <Col xs={12} sm={6} className="text-sm-end">
            <div className="flex justify-end space-x-4">
              <a
                href="https://www.linkedin.com/in/vilhjalmur-arnar-vilhjalmsson/"
                className="group relative inline-flex items-center justify-center h-10 w-10 rounded-full border border-white text-white bg-black hover:bg-white hover:text-black transition-all duration-300"
              >
                <FaLinkedin className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/villi02"
                className="group relative inline-flex items-center justify-center h-10 w-10 rounded-full border border-white text-white bg-black hover:bg-white hover:text-black transition-all duration-300"
              >
                <FaGithub className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
            <p className="text-gray-300 text-sm mt-2">
              Copyright 2023. All Rights Reserved Vilhjalmur Arnar Vilhjalmsson
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
