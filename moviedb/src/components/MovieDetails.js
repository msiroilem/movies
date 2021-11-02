import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  LoadMovieDetails,
  ToggleLoad,
  SetMovieDetails
} from '../store/actions/MovieActions'
import { POSTER_PATH } from '../services'

const mapStateToProps = ({ movieDetailsState }) => {
  return { movieDetailsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMovieDetails: (movie) => dispatch(SetMovieDetails(movie)),
    toggleLoad: (isLoaded) => dispatch(ToggleLoad(isLoaded))
  }
}

const MovieDetails = (props) => {
  const movieDetails = props.location.state.movie
  useEffect(() => {
    props.setMovieDetails(movieDetails)
    props.toggleLoad(true)
  })
  return (
    <div className="page">
      <h1>Movies</h1>
      <div className="movie-details-conatiner">
        <h2>{movieDetails.original_title}</h2>
        <img
          className="poster"
          src={`${POSTER_PATH}${movieDetails.poster_path}`}
          alt={`${movieDetails.original_title} poster`}
        />
        <div className="details">
          <p>{movieDetails.overview}</p>
        </div>
        <div className="details">
          <h4>Release date: {movieDetails.release_date}</h4>
          <h5>
            Average Review: {movieDetails.vote_average}/10 (
            {movieDetails.vote_count} total reviews)
          </h5>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
