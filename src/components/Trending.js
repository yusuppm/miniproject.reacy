import { Card, Row, Container, Col, Image } from "react-bootstrap";
import trend1 from "../assets/image/trending/trend1.jpg";
import trend2 from "../assets/image/trending/trend2.jpg";
import trend3 from "../assets/image/trending/trend3.jpg";
import trend4 from "../assets/image/trending/trend4.jpg";
import trend5 from "../assets/image/trending/trend5.jpg";
import trend6 from "../assets/image/trending/trend6.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="moviewrapper" id="trending">
            <Card className="movietrend1">
              <Image
                src={trend1}
                alt="The guardians of the galaxy in holday movie" 
                className="imageMod"/>
                <div className="bg-dark " >
                <div className="p-2 m-1 text-white" >
                <Card.Title className="text-center">The guardians of the galaxy</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
            </div>
            </Card>
          </Col>
          <Col md={4} className="moviewrapper">
            <Card className="movietrend1">
              <Image
                src={trend2}
                alt="The guardians of the galaxy in holday movie" 
                className="imageMod"/>
                <div className="bg-dark " >
                <div className="p-2 m-1 text-white" >
                <Card.Title className="text-center">Wednesday</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
            </div>
            </Card>
          </Col>
          <Col md={4} className="moviewrapper">
            <Card className="movietrend1">
              <Image
                src={trend3}
                alt="The guardians of the galaxy in holday movie"
                className="imageMod"/>
                <div className="bg-dark " >
                <div className="p-2 m-1 text-white" >
                <Card.Title className="text-center">Lyle,Lyle Crocodile</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
            </div>
            </Card>
          </Col>
          <Col md={4} className="moviewrapper">
            <Card className="movietrend1">
              <Image
                src={trend4}
                alt="The guardians of the galaxy in holday movie"
                className="imageMod"/>
                <div className="bg-dark " >
                <div className="p-2 m-1 text-white" >
                <Card.Title className="text-center">The Witch</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
            </div>
            </Card>
          </Col>
          <Col md={4} className="moviewrapper">
            <Card className="movietrend1">
              <Image
                src={trend5}
                alt="The guardians of the galaxy in holday movie"
                className="imageMod"/>
                <div className="bg-dark " >
                <div className="p-2 m-1 text-white" >
                <Card.Title className="text-center">Jujutsu Kaisen</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
            </div>
            </Card>
          </Col>
          <Col md={4} className="moviewrapper">
            <Card className="movietrend1">
              <Image
                src={trend6}
                alt="The guardians of the galaxy in holday movie"
                className="imageMod"/>
                <div className="bg-dark " >
                <div className="p-2 m-1 text-white" >
                <Card.Title className="text-center">The Good Doctor</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
            </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
