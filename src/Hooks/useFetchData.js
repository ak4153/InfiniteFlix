import React, { useState, useEffect } from "react";
import axios from "axios";
import { fromJSON } from "flatted";

export default function useFetchData() {
  const [movies, setMovies] = useState([]);
  const [yearFilter, setYearFilter] = useState({});
  const [skip, setSkip] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [previousFilter, setPreviousFilter] = useState();

  function getMovies() {
    axios({
      method: "post",
      url: `https://infiniteflix.herokuapp.com/movies/`,
      responseType: "stream",
      data: { skip: skip, year: yearFilter.year, rating: yearFilter.rating },
    }).then(function (response) {
      //checks if to fetch next 10 or new filtered based on state comaprison
      if (previousFilter === yearFilter)
        setMovies([...movies, ...fromJSON(response.data)]);
      else setMovies([...fromJSON(response.data)]);
    });
  }

  useEffect(() => {
    getMovies();
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
