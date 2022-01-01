import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function Movie({ movie }) {
  return (
    <MovieWrapper>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.poster} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.plot}</Card.Text>
          <Card.Text>{movie.year}</Card.Text>
          <Card.Text>{movie.imdb.rating}</Card.Text>
          <Button variant="primary">Go to Movie</Button>
        </Card.Body>
      </Card>
    </MovieWrapper>
  );
}

const MovieWrapper = styled.div``;
