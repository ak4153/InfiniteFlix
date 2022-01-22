import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import { StateProvider } from "./Components/StateProvider";
import reducer, { initialState } from "./Components/reducer";
import MoviePage from "./Components/MoviePage";
ReactDOM.render(
  <React.StrictMode>
    <StateProvider
      onScroll={console.log("hi")}
      reducer={reducer}
      initialState={initialState}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieid" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
