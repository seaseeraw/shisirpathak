import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">About Me</h2>
      <Row>
        <Col md={6}>
          <p>
            Hi, I'm a passionate **Full-Stack Developer** with expertise in the **MERN stack**.
            I love building interactive web applications that provide great user experiences.
          </p>
          <p>
            🚀 **Skills**: React, Node.js, Express, MongoDB, Bootstrap, JavaScript  
            🎓 **Education**: Master of Computer Science, Australia  
            💼 **Experience**: 5+ years in software development
          </p>
        </Col>
        <Col md={6}>
          <Card className="p-3 shadow-lg">
            <h4>Key Strengths</h4>
            <ul>
              <li>Frontend Development (React, Bootstrap, CSS)</li>
              <li>Backend Development (Node.js, Express)</li>
              <li>API Integration & Testing</li>
              <li>Database Management (MongoDB, Firebase)</li>
              <li>DevOps (AWS, Azure, Docker)</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
