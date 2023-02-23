import api from "../api"

function getMovieDetail (id) {
  const API_KEY = process.env.REACT_APP_API_KEY
  return async (dispatch) => {
    try {
      const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      const movieDetailApi = api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
      const reviewApi = api.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)

      let [movieDetail, genreList, movieReview] = await Promise.all([movieDetailApi, genreApi, reviewApi])
      console.log("detail", movieDetail)
      console.log("review", movieReview)
      
      dispatch({
        type : "GET_Detail_SUCCESS",
        payload : {
          movieDetail : movieDetail.data,
          genreList : genreList.data.genres,
          movieReview : movieReview.data.results
        }
      })
    } catch (error) {
      dispatch({
        type : "GET_MOVIES_FAILURE"
      })
    }

  }
}

export const detailAction = {
  getMovieDetail
}