import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";
import { actionTypes, initialState } from "./reducer";
import { fromJSON } from "flatted";
import Movie from "./Movie";
import MoviesFilter from "./MoviesFilter";
import useFetchData from "../Hooks/useFetchData";
const goToTop = () => {
  const doc = document.getElementById("html");
  doc.scrollTop = 0;
};
export default function Movies() {
  const [renderTopButton, setRenderTopButton] = useState(false);

  let searchAfterScroll = false;
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
  ] = useFetchData(searchAfterScroll);
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
    if (chatBody.scrollTop > 150) {
      setRenderTopButton(true);
    } else setRenderTopButton(false);
    if (result >= 0 && result <= 1) {
      setSkip((initialState) => initialState + 10);
    }
  };

  const onFilterSubmit = (e) => {
    e.preventDefault();
    searchAfterScroll = true;
    setSkip(0);

    setYearFilter(() => {
      return {
        title: e.target[0].value,
        year: parseInt(e.target[1].value),
        rating: parseInt(e.target[2].value),
      };
    });
  };

  return (
    <MoviesPageWrapper id="movies__wrapper">
      <MoviesFilter onFilterSubmit={onFilterSubmit}></MoviesFilter>

      <div className="movies__container">
        {movies.length > 0 ? (
          movies.map((mov) => <Movie key={mov._id} movie={mov}></Movie>)
        ) : (
          <h5>Flixing...</h5>
        )}
      </div>
      {renderTopButton ? (
        <h4 onClick={goToTop} className="movies__top">
          TOP
        </h4>
      ) : (
        ""
      )}

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
  .movies__top {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    &:hover {
      cursor: pointer;
    }
    border: black 2px solid;
    background-color: grey;
    border-radius: 10px;
  }
`;
