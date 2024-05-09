import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import about from "../../assets/about.webp";

function About() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <div className="card-body mt-5">
            <h1 className="card-title fw-bold">About Us</h1>
            <p>
            MERN stack developer with expertise in MongoDB, Express.js, React.js, and Node.js. Proficient in designing and implementing scalable web applications. Skilled in full-stack development, from database design and API development to front-end user interface creation. Passionate about delivering high-quality code and exceptional user experiences
            </p>
          </div>
        </Col>
        <Col xs={6} className="ms-auto">
          <div>
            <Image src={about} className="card-img-top" alt="..." />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
