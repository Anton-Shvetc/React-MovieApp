export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    case "SHOW_INFO":
      return {
        ...state,
        watched2: state.watched2.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched2: [],
        watched2: [action.payload, ...state.watched2],
      };
    case "CLEAR":
      return {
        ...state,
        watched2: state.watched2.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched2: [],
      };

    default:
      return state;
  }
};
