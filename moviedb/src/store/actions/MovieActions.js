import { GetMovies, GetMovieDetails } from '../../services/MovieServices'
import {
  GET_MOVIES,
  GET_MOVIE_DETAILS,
  TOGGLE_LOAD,
  SET_MOVIE_DETAILS
} from '../types'

export const LoadMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await GetMovies()
      dispatch({ type: GET_MOVIES, payload: movies })
    } catch (error) {
      throw error
    }
  }
}

export const LoadMovieDetails = (movie_id) => {
  return async (dispatch) => {
    try {
      const movieDetails = await GetMovieDetails(movie_id)
      dispatch({ type: GET_MOVIE_DETAILS, payload: movieDetails })
    } catch (error) {
      throw error
    }
  }
}

export const SetMovieDetails = (movie) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_MOVIE_DETAILS, payload: movie })
    } catch (error) {
      throw error
    }
  }
}

export const ToggleLoad = (isLoaded) => ({
  type: TOGGLE_LOAD,
  payload: isLoaded
})
