function getMovieDetail () {
  const API_KEY = process.env.REACT_APP_API_KEY
  return async (dispatch) => {
    try {
      const {id} = useParams()
      
      const genreApi = await api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      const movieDetailApi = await api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)

      let [movieDetail, genreList] = await Promise.all([movieDetailApi, genreApi])
      console.log("detail", movieDetail)
      
      dispatch({
        type : "GET_Detail_SUCCESS",
        payload : {
          movieDetail : movieDetail.data,
          genreList : genreList.data.genres,
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