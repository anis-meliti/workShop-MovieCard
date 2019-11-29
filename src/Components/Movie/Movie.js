import React from "react";
import { Card, CardHeader, CardBody, CardText, CardImg, Col } from "reactstrap";
import "./Movie.css";
import Rate from "../SearchBar/Rate";
const Movie = props => {
  const { title, firas, rating, year } = props.movie;
  return (
    <Col>
      <Card style={{ width: "20rem" }}>
        <CardHeader>
          <h6 className="title">{title}</h6>
        </CardHeader>
        <CardBody>
          <CardImg src={firas} className="card-image" />
          <CardText>
            <Rate rating={rating} isClickeble={false} />
            {year}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Movie;
