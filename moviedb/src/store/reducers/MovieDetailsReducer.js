const {
  GET_MOVIE_DETAILS,
  TOGGLE_LOAD,
  SET_MOVIE_DETAILS
} = require('../types')

const iState = {
  movieDetails: {},
  isLoaded: false
}

const MovieDetailsReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return { ...state, movieDetails: { ...action.payload } }
    case SET_MOVIE_DETAILS:
      return { ...state, movieDetails: { ...action.payload } }
    case TOGGLE_LOAD:
      return { ...state, isLoaded: action.payload }
    default:
      return { ...state }
  }
}

export default MovieDetailsReducer
