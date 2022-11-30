import { Card, Row, Container, Col, Image } from "react-bootstrap";
import sh1 from "../assets/image/superhero/sh1.jpg";
import sh2 from "../assets/image/superhero/sh2.jpg";
import sh3 from "../assets/image/superhero/sh3.jpg";
import sh4 from "../assets/image/superhero/sh4.jpg";
import sh5 from "../assets/image/superhero/sh5.jpg";
import sh6 from "../assets/image/superhero/sh6.jpg";


const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="moviewrapper" id="superhero">
            <Card className="movietrend1">
              <Image
                src={sh1}
                alt="The guardians of the galaxy in holday movie" 
                className="imageMod"/>
                <div className="bg-dark " >
                <div className="p-2 m-1 text-white" >
                <Card.Title className="text-center">SPIDERMAN No Way Home</Card.Title>
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
                src={sh2}
                alt="The guardians of the galaxy in holday movie" 
                className="imageMod"/>
                <div className="bg-dark " >
                <div className="p-2 m-1 text-white" >
                <Card.Title className="text-center">Black Adam</Card.Title>
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
                src={sh3}
                alt="The guardians of the galaxy in holday movie"
                className="imageMod"/>
                <div className="bg-dark " >
                <div className="p-2 m-1 text-white" >
                <Card.Title className="text-center">Black Panther</Card.Title>
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
                src={sh4}
                alt="The guardians of the galaxy in holday movie"
                className="imageMod"/>
                <div className="bg-dark " >
                <div className="p-2 m-1 text-white" >
                <Card.Title className="text-center">Thor Love&Thunder</Card.Title>
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
                src={sh5}
                alt="The guardians of the galaxy in holday movie"
                className="imageMod"/>
                <div className="bg-dark " >
                <div className="p-2 m-1 text-white" >
                <Card.Title className="text-center">Doctor Strange</Card.Title>
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
                src={sh6}
                alt="The guardians of the galaxy in holday movie"
                className="imageMod"/>
                <div className="bg-dark " >
                <div className="p-2 m-1 text-white" >
                <Card.Title className="text-center">Batman</Card.Title>
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

export default SuperHero;
