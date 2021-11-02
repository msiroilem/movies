import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadMovies, ToggleLoad } from '../store/actions/MovieActions'
import { POSTER_PATH } from '../services'

const mapStateToProps = ({ movieState }) => {
  return { movieState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies()),
    toggleLoad: (isLoaded) => dispatch(ToggleLoad(isLoaded))
  }
}

const Movies = (props) => {
  useEffect(() => {
    props.fetchMovies()
    props.toggleLoad(true)
  })
  return (
    <div className="page">
      <h1>Movies</h1>
      <ul className="movie-container">
        {props.movieState.isLoaded
          ? props.movieState.movies.map((movie) => (
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { movie }
                }}
                className="movie-link"
                key={movie.id}
              >
                <li className="movie-card">
                  <img
                    className="backdrop"
                    src={`${POSTER_PATH}${movie.backdrop_path}`}
                    alt={`${movie.original_title} backdrop`}
                  />
                  <h2>{movie.original_title}</h2>
                </li>
              </Link>
            ))
          : undefined}
      </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
