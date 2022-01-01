export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_URL: "SET_URL",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.SET_URL: {
      return "http://localhost:3001";
    }

    default:
      return state;
  }
};
export default reducer;
