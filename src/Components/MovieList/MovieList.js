import React from "react";
import { Row } from "reactstrap";
import Movie from "../Movie/Movie";
const MovieList = ({ movies }) => {
  return (
    <Row>
      {movies.map((el, i) => (
        <Movie movie={el} key={i} />
      ))}
    </Row>
  );
};

export default MovieList;
