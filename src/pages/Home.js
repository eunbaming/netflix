import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch()
  const {popularMovies, topRatedMovies, upComingMovies, loading} = useSelector((state) => state.movie)
  
  useEffect(() => {
    dispatch(movieAction.getMovies())
  }, [])

  if (loading) {
    return <div className='loading'><ClipLoader color="fff" loading={loading} size={150} /></div>
  }
  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]}/>}
      <h1>Popular Movie</h1>
      <MovieSlide movie={popularMovies}/>
      <h1>Top rated Movie</h1>
      <MovieSlide movie={topRatedMovies}/>
      <h1>upComing Movie</h1>
      <MovieSlide movie={upComingMovies}/>
    </div>
  )
}

export default Home
