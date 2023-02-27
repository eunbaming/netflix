import api from "../api"

function getMovies (page) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  
  return async (dispatch) => {
    try {
      dispatch({type : "GET_MOVIES_REQUEST"})
      const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&page=${page}`); // .http 함수
      const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US`);
      const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US`);
      const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`);

      let [popularMovies, topRatedMovies, upComingMovies, genreList] = await Promise.all([popularMovieApi, topRatedApi, upComingApi, genreApi]);

      dispatch({
        type : "GET_MOVIES_SUCCESS",
        payload : {
          popularMovies : popularMovies.data,
          topRatedMovies : topRatedMovies.data,
          upComingMovies : upComingMovies.data,
          genreList : genreList.data.genres,
        }
      });
    } catch (error) {
      dispatch({
        type : "GET_MOVIES_FAILURE"
      });
    };
  };
};

function getSearch (page, keyword) {
  const API_KEY = process.env.REACT_APP_API_KEY;

  return async (dispatch) => {
    try {
      dispatch({type : "GET_SEARCH_REQUEST"});
      const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&page=${page}`);
      const searchApi = api.get(`/search/movie?api_key=${API_KEY}&query=${keyword}&page=${page}`);
      const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`);
  
      let [popularMovies, searchMovies, genreList] = await Promise.all([popularMovieApi, searchApi, genreApi]);
  
      dispatch({
        type : "GET_SEARCH_SUCCESS",
        payload : {
          popularMovies : popularMovies.data,
          searchMovies : searchMovies.data,
          genreList : genreList.data.genres
        }
      });
    } catch (error) {
      dispatch({
        type : "GET_MOVIES_FAILURE"
      });
    }
  };
};


export const movieAction = {
  getMovies, getSearch
};