import { useEffect, useState } from "react";
import { Card, Container, Row,  Col, Image } from "react-bootstrap";
import trend1 from "../assets/image/trending/trend1.jpg";
import trend2 from "../assets/image/trending/trend2.jpg";
import trend3 from "../assets/image/trending/trend3.jpg";
import trend4 from "../assets/image/trending/trend4.jpg";
import trend5 from "../assets/image/trending/trend5.jpg";
import trend6 from "../assets/image/trending/trend6.jpg";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_APIKEY
      }
    }).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={4} className="moviewrapper" id="trending" key={index}>
                <Card className="movietrend1">
                  <Image
                    src={`${process.env.REACT_APP_BASEIMGURL}/${result.poster_path}`}
                    alt="test"
                    className="imageMod"
                  />
                  <div className="bg-dark ">
                    <div className="p-2 m-1 text-white">
                      <Card.Title className="text-center">
                        {result.title}
                      </Card.Title>
                      <Card.Text className="text-left">
                        {result.overview}
                      </Card.Text>
                      <Card.Text className="text-left"> Popularity more than (+
                        {result.popularity} )
                      </Card.Text>
                      <Card.Text className="text-left">ID (
                        {result.id} )
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
