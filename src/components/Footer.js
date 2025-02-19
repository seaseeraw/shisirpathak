import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero-section text-center text-white d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="hero-title">Hi, I'm a MERN Stack Developer</h1>
            <p className="hero-subtitle">
              Passionate about building interactive, user-friendly, and scalable web applications.
            </p>
            <Button variant="primary" href="/projects" className="me-2">
              View My Work
            </Button>
            <Button variant="outline-light" href="/contact">
              Hire Me
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
