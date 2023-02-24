let initialState = {
  movieDetail : {},
  genreList : [],
  loading : true,
  movieReview : [],
  relatedMovie : [],
  movieTrailer : []
}
function detailReducer (state=initialState, action) {
  let {type, payload} = action
  switch(type) {
    case "GET_Detail_SUCCESS":
      return {
        ...state,
        movieDetail : payload.movieDetail,
        genreList : payload.genreList,
        movieReview : payload.movieReview,
        loading : false
      }
    case "GET_RELATED_MOVIES" :
      return {
        ...state,
        relatedMovie : payload.relatedMovie
      }
    case "GET_TRAILER_SUCCESS" :
      return {
        ...state,
        movieTrailer : payload.movieTrailer
      }
    default :
      return {...state}
  }
}

export default detailReducer