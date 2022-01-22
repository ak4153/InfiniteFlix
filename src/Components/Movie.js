import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useStateValue } from "./StateProvider";
import { Link, useParams } from "react-router-dom";
import { actionTypes } from "./reducer";
export default function Movie({ movie }) {
  const [{}, dispatch] = useStateValue();

  return (
    <MovieWrapper>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.poster} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.plot}</Card.Text>
          <Card.Text>{movie.year}</Card.Text>
          <Card.Text>{movie.imdb.rating}</Card.Text>
          <Link
            onClick={() =>
              dispatch({ type: actionTypes.SET_MOVIE, movie: movie })
            }
            to={`${movie._id}`}
          >
            <Button variant="primary">Go to movie</Button>
          </Link>
        </Card.Body>
      </Card>
    </MovieWrapper>
  );
}

const MovieWrapper = styled.div``;
