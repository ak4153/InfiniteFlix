import React, { useState, useEffect } from "react";
import axios from "axios";
import { fromJSON } from "flatted";
// "https://infiniteflix.herokuapp.com/movies";
//http://localhost:3001/movies
const BASEURL = "https://infiniteflix.herokuapp.com/movies";

export default function useFetchData(searchAfterScroll) {
  const [movies, setMovies] = useState([]);
  const [yearFilter, setYearFilter] = useState({});
  const [skip, setSkip] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [previousFilter, setPreviousFilter] = useState();

  function getMovies() {
    axios({
      method: "post",
      url: BASEURL,

      data: {
        skip: skip,
        year: yearFilter.year,
        rating: yearFilter.rating,
        title: yearFilter.title,
      },
    }).then(function (response) {
      //checks if to fetch next 10 or new filtered based on state comaprison
      if (previousFilter === yearFilter)
        setMovies([...movies, ...fromJSON(response.data)]);
      else setMovies([...fromJSON(response.data)]);
    });
  }

  useEffect(() => {
    //resets skip for infinite scrolling after filters apply
    if (searchAfterScroll) {
      searchAfterScroll = false;
    } else {
      getMovies();
    }
  }, [skip]);

  useEffect(() => {
    //prev state doesnt get updated immidietly only on next rerender
    setPreviousFilter(yearFilter);
    getMovies();
  }, [yearFilter]);

  return [
    skip,
    setSkip,
    yearFilter,
    setYearFilter,
    movies,
    setMovies,
    isFetching,
    setIsFetching,
  ];
}
