import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import axios from "axios";
import { useStateValue } from "./StateProvider";
import { actionTypes, initialState } from "./reducer";
import { fromJSON } from "flatted";
import Movie from "./Movie";
import MoviesFilter from "./MoviesFilter";
import useInView from "react-cool-inview";
import useFetchData from "../Hooks/useFetchData";
export default function Movies() {
  const [url, dispatch] = useStateValue();
  const [
    skip,
    setSkip,
    yearFilter,
    setYearFilter,
    movies,
    setMovies,
    isFetching,
    setIsFetching,
  ] = useFetchData();

  /////////
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  ////////

  const handleScroll = () => {
    const chatBody = document.getElementById("html");
    const scrollHeight = chatBody.scrollHeight;
    const clientHeight = chatBody.clientHeight;
    const result = scrollHeight - clientHeight - Math.floor(chatBody.scrollTop);
    if (result >= 0 && result <= 1) {
      console.log("fires");
      //this doesnt work setSkip(skip+10)
      setSkip((initialState) => initialState + 10);
    }
  };

  const onFilterSubmit = (e) => {
    e.preventDefault();
    setYearFilter((initialState) => {
      return {
        year: parseInt(e.target[0].value),
        rating: parseInt(e.target[1].value),
      };
    });
  };

  return (
    <MoviesPageWrapper id="movies__wrapper">
      <MoviesFilter onFilterSubmit={onFilterSubmit}></MoviesFilter>

      <div className="movies__container">
        {movies.map((mov) => (
          <Movie key={mov._id} movie={mov}></Movie>
        ))}
      </div>

      {isFetching && <h4 className="movies__loadmore">Loading...</h4>}
    </MoviesPageWrapper>
  );
}
const MoviesPageWrapper = styled.div`
  margin: 10px;
  .movies__container {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }
  .movies__loadmore {
    text-align: center;
    margin-top: 15px;
  }
`;
