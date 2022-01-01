import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

export default function MoviesFilter({ onFilterSubmit }) {
  const createDropBox = () => {
    const dropBoxOptions = [];
    for (let i = 1; i < 11; i++) {
      dropBoxOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return dropBoxOptions;
  };

  return (
    <MoviesFilterWrapper>
      <div className="moviefilter__body">
        <h4>Filters</h4>

        <div className="moviefilter__filters">
          <form
            className="moviefilter__filters"
            action=""
            onSubmit={(e) => onFilterSubmit(e)}
          >
            <div className="moviefilter__containers">
              <label htmlFor="year">Year:</label>
              <input
                placeholder="2015"
                type="number"
                name="year"
                className="moviefilter__year"
              />
            </div>

            <div className="moviefilter__containers">
              <select
                defaultValue={5}
                className="moviefilter__rating"
                name="rating"
              >
                {createDropBox().map((option) => option)}
              </select>
            </div>
            <button className="moviefilter__submitButton">Go</button>
          </form>
        </div>
      </div>
    </MoviesFilterWrapper>
  );
}

const MoviesFilterWrapper = styled.div`
  @media (min-width: 900px) {
    h4 {
      margin: 0;
    }
    .moviefilter__body {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      margin: 20px;
      border-bottom: 2px solid #cfe0e8;
      border-top: 2px solid #cfe0e8;
    }
    .moviefilter__filters {
      display: flex;
      justify-content: space-evenly;
      flex-grow: 1;
    }
    .moviefilter__containers {
      background-color: #cfe0e8;
      padding: 0;
      border-radius: 10px;
    }
    .moviefilter__year {
      border: none;
      background: transparent;
      padding: 0;
      height: 100%;
      outline: none;
      -moz-appearance: textfield;
      -webkit-appearance: none;
    }
    .moviefilter__year::-webkit-outer-spin-button,
    .moviefilter__year::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .moviefilter__rating {
      border: none;
      outline: none;
      background-color: transparent;
    }
    .moviefilter__submitButton {
      color: #ffffff;
      background-color: #cfe0e8;
      font-size: 19px;
      border: 1px solid #2d63c8;
      padding: 10;
      cursor: pointer;
      color: black;
      &:hover {
        background-color: #65a2bf;
      }
    }
  }
  @media (min-width: 319px) {
    h4 {
      margin: 0;
    }
    .moviefilter__body {
      display: flex;
      justify-content: space-between;
      padding: 5px;
      margin: 10px;
      border-bottom: 2px solid #cfe0e8;
      border-top: 2px solid #cfe0e8;
      flex-direction: column;
    }
    .moviefilter__filters {
      display: flex;
      justify-content: space-evenly;
      flex-grow: 1;
    }
    .moviefilter__containers {
      background-color: #cfe0e8;
      padding: 0px;
      height: 80%;
      border-radius: 10px;
    }
    .moviefilter__year {
      border: none;
      background: transparent;
      padding: 0;
      width: 70%;
      outline: none;
      -moz-appearance: textfield;
      -webkit-appearance: none;
    }
    .moviefilter__year::-webkit-outer-spin-button,
    .moviefilter__year::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .moviefilter__rating {
      border: none;
      outline: none;
      background-color: transparent;
    }
    .moviefilter__submitButton {
      color: #ffffff;
      background-color: #cfe0e8;
      font-size: 19px;
      border: 1px solid #2d63c8;
      padding: 10;
      cursor: pointer;
      color: black;
      height: 80%;
      &:hover {
        background-color: #65a2bf;
      }
    }
  }
`;
