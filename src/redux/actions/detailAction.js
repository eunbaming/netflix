import api from "../api";

function getMovieDetail (id) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  
  return async (dispatch) => {
    try {
      const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`);
      const movieDetailApi = api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
      const reviewApi = api.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
      const relatedApi = api.get(`/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
      const trailerApi = api.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);

      let [movieDetail, genreList, movieReview, relatedMovie, movieTrailer] = await Promise.all([movieDetailApi, genreApi, reviewApi, relatedApi, trailerApi]);
      
      dispatch({
        type : "GET_Detail_SUCCESS",
        payload : {
          movieDetail : movieDetail.data,
          genreList : genreList.data.genres,
          movieReview : movieReview.data.results,
        }
      });
      dispatch({
        type : "GET_RELATED_MOVIES",
        payload : {
          movieDetail : movieDetail.data,
          genreList : genreList.data.genres,
          relatedMovie : relatedMovie.data.results
        }
      });
      dispatch({
        type : "GET_TRAILER_SUCCESS",
        payload : {
          movieTrailer : movieTrailer.data.results[0]
        }
      });
    } catch (error) {
      dispatch({
        type : "GET_MOVIES_FAILURE"
      });
    };
  };
};

export const detailAction = {
  getMovieDetail
};