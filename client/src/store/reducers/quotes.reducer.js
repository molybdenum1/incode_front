const quotesReducer = (state = { quotes: [] }, action = {}) => {
  if (action.type === "FETCH_QUOTES") {
    return { ...state, quotes: action.payload };
  }
  return state;
};

export default quotesReducer;
