let initialState = {
  movieDetail : {},
  genreList : [],
  loading : true
}
function detailReducer (state=initialState, action) {
  let {type, payload} = action
  switch(type) {
    // case "GET_MOVIES_DETAIL":
    //   return {
    //     ...state,
    //     loading : true
    //   }
    case "GET_Detail_SUCCESS":
      return {
        ...state,
        movieDetail : payload.movieDetail,
        genreList : payload.genreList,
        loading : false
      }
    default :
      return {...state}
  }
}

export default detailReducer