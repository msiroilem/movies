import { Client, axiosConfig } from './'

export const GetMovies = async () => {
  try {
    const res = await Client.get('/discover/movie', axiosConfig)
    return res.data.results
  } catch (error) {
    throw error
  }
}

export const GetMovieDetails = async (movie_id) => {
  try {
    const res = await Client.get(`/movie/${movie_id}`, axiosConfig)
    return res.data
  } catch (error) {
    throw error
  }
}
