let initialState = {
  popularMovies : {},
  topRatedMovies : {},
  upComingMovies : {},
  genreList : [],
  loading : true,
  searchMovies : {},
};

function movieReducer (state=initialState, action) {
  let {type, payload} = action;
  switch(type) {
    case "GET_MOVIES_REQUEST":
      return {
        ...state,
        loading : true,
      };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies : payload.popularMovies,
        topRatedMovies : payload.topRatedMovies,
        upComingMovies : payload.upComingMovies,
        genreList : payload.genreList,
        loading : false
      };
    case "GET_MOVIES_FAILURE":
      return {
        ...state,
        loading : false
      };
    case "GET_MOVIES_ALL_SUCCESS":
      return {
        ...state,
        popularMovies : payload.popularMovies,
        loading : false
      };
    case "GET_SEARCH_REQUEST" :
      return {
        ...state,
        loading : true
      };
    case "GET_SEARCH_SUCCESS":
      return {
        ...state,
        popularMovies : payload.popularMovies,
        searchMovies : payload.searchMovies,
        genreList :payload.genreList,
        loading : false
      };
    default :
      return {...state};
  };
};

export default movieReducer;