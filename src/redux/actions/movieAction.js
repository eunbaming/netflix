import { useParams } from "react-router-dom"
import api from "../api"

function getMovies (page) {
  const API_KEY = process.env.REACT_APP_API_KEY
  
  return async (dispatch) => {
    try {
      dispatch({type : "GET_MOVIES_REQUEST"})
      const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&page=${page}`) // .http 함수
      const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US`)
      const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US`)

      const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)

      // const searchApi = api.get(`3/search/movie?api_key=${API_KEY}&q=${searchQuery}language=en-US&page=1&include_adult=false`)

      let [popularMovies, topRatedMovies, upComingMovies, genreList] = await Promise.all([popularMovieApi, topRatedApi, upComingApi, genreApi])
      // console.log(popularMovies, topRatedMovies, upComingMovies)
      // console.log("list", genreList)
      // console.log("popular", popularMovies)
      // console.log("search", searchMovies)

      dispatch({
        type : "GET_MOVIES_SUCCESS",
        payload : {
          popularMovies : popularMovies.data,
          topRatedMovies : topRatedMovies.data,
          upComingMovies : upComingMovies.data,
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

// function paginationMovies (page) {
//   return async (dispatch) => {
//     const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&page=${page}`) // .http 함수
//     const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US`)
//     const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US`)

//     const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)

//     let [popularMovies, topRatedMovies, upComingMovies, genreList] = await Promise.all([popularMovieApi, topRatedApi, upComingApi, genreApi])
//       console.log(popularMovies, topRatedMovies, upComingMovies)
//       console.log("list", genreList)
//       console.log("popular", popularMovies)

//       dispatch({
//         type : "GET_MOVIES_SUCCESS",
//         payload : {
//           popularMovies : popularMovies.data,
//           topRatedMovies : topRatedMovies.data,
//           upComingMovies : upComingMovies.data,
//           genreList : genreList.data.genres,
//         }
//       })
//   }
// }

export const movieAction = {
  getMovies, 
}