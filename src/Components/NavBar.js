import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <NavBarWrapper>
      <nav className="navbar">
        <Link className="navbar__link" to="home">
          Home
        </Link>
        <Link className="navbar__link" to="movies">
          Movies
        </Link>
      </nav>
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled.div`
  top: 0;
  .navbar {
    margin-top: 10px;
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    list-style-type: none;
    border-bottom: black 1px solid;
    width: 100%;
    background-color: #cfe0e8;
    border-radius: 20px;
    box-shadow: 0px 7px 15px 3px rgba(0, 0, 0, 0.53);
    height: 50px;
  }
  .navbar__link {
    text-decoration: none;
    background-color: #b7d7e8;
    border-radius: 5px;
    transition: margin 0.2s;
  }
  .navbar__link:hover {
    text-decoration: none;
    margin-bottom: 5px;
    transform: ;
  }
  .navbar__link:active {
    color: #87bdd8;
  }
`;
