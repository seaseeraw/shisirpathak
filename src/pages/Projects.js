import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack MERN application with user authentication and payments.",
    image: "https://via.placeholder.com/300",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com"
  },
  {
    title: "Task Manager App",
    description: "A React and Node.js app for managing daily tasks efficiently.",
    image: "https://via.placeholder.com/300",
    github: "https://github.com/yourusername/task-manager",
    demo: "https://taskmanager-demo.com"
  },
];

const Projects = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.demo} target="_blank" className="me-2">
                  Live Demo
                </Button>
                <Button variant="dark" href={project.github} target="_blank">
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
