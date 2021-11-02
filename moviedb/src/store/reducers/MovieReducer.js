const { GET_MOVIES, TOGGLE_LOAD } = require('../types')

const iState = {
  movies: [],
  isLoaded: false
}

const MovieReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload }
    case TOGGLE_LOAD:
      return { ...state, isLoaded: action.payload }
    default:
      return { ...state }
  }
}
export default MovieReducer
