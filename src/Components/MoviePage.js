import React from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
const MoviePage = (props) => {
  /// you got the movie data from redux now implement movie info
  //here make  ... <Card.Text>{movie.imdb.rating}</Card.Text>

  const [movie, dispatch] = useStateValue();
  const movieData = movie.movie;

  return (
    <MovieWrapper>
      <Card.Img className="img" variant="top" src={movie.movie.poster} />
      <Card style={{ width: "30rem" }}>
        <Card.Text className="moviepage__card-text">
          {movie.movie.fullplot}
        </Card.Text>
        <Card.Text className="moviepage__card-text">
          Release Date: {movie.movie.year}
        </Card.Text>
        <Card.Text className="moviepage__card-text">
          IMDB Rating: {movie.movie.imdb.rating}
        </Card.Text>
        <Card.Text className="moviepage__card-text">
          Genre: {movie.movie.genres.map((genre) => genre + ", ")}
        </Card.Text>
        <Card.Text className="moviepage__card-text">
          Rating: {movieData.rated}
        </Card.Text>
        <Card.Text className="moviepage__card-text">
          Length: {movieData.runtime} Minutes
        </Card.Text>
        <Card.Text className="moviepage__card-text">
          Cast: {movieData.cast.map((star) => star + ", ")}
        </Card.Text>
        <Card.Text className="moviepage__card-text">
          Director: {movieData.directors[0]}
        </Card.Text>
      </Card>
    </MovieWrapper>
  );
};
const MovieWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  .img {
    width: 20rem;
    margin-right: 10px;
  }
  .moviepage__card-text {
    margin-left: 10px;
    border-bottom: 1px solid lightgray;
  }
`;
export default MoviePage;
