import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    {/* <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter> */}
  </StateContext.Provider>
);
//useContext accepts the context as an argument
//and lets you use the value inside the context
export const useStateValue = () => useContext(StateContext);
