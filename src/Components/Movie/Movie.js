import React from 'react';
import { Card, CardTitle, CardBody, CardText, CardImg, Col } from 'reactstrap';
import './Movie.css';
import Rate from '../SearchBar/Rate';
const Movie = props => {
  const { title, firas, rating, year } = props.movie;
  return (
    <Col>
      <Card style={{ width: '20rem' }}>
        <CardTitle>
          <h6 className='title'>{title}</h6>
        </CardTitle>
        <CardImg src={firas} className='card-image' />
        <CardBody>
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
