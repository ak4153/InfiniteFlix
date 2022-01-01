import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import { StateProvider } from "./Components/StateProvider";
import reducer, { initialState } from "./Components/reducer";

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
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
