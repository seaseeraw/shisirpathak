import { Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="text-center my-5">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm a Full-Stack Developer with expertise in MERN stack.</p>
      <Button variant="primary" href="/projects">View My Work</Button>
    </Container>
  );
};

export default Home;
