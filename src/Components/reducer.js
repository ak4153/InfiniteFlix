export const initialState = {
  movie: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_URL: "SET_URL",
  SET_MOVIE: "SET_MOVIE",
};

const reducer = (state, action) => {
  console.log("from reducer action:", action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.SET_URL: {
      return "http://localhost:3001";
    }
    case actionTypes.SET_MOVIE: {
      return {
        movie: action.movie,
      };
    }
    default:
      return state;
  }
};
export default reducer;
