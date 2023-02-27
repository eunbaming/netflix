import React, { useEffect } from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";
import { Container } from 'react-bootstrap';

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upComingMovies, loading} = useSelector((state) => state.movie);
  
  useEffect(() => {
    dispatch(movieAction.getMovies())
  }, []);

  if (loading) {
    return <div className='loading'><ClipLoader color="fff" loading={loading} size={150} /></div>
  };
  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]}/>}
      <Container>
        <h1 className='movie-slide'>Popular Movie</h1>
        <MovieSlide movies={popularMovies}/>
        <h1 className='movie-slide'>Top rated Movie</h1>
        <MovieSlide movies={topRatedMovies}/>
        <h1 className='movie-slide'>upComing Movie</h1>
        <MovieSlide movies={upComingMovies}/>
      </Container>
    </div>
  )
};

export default Home;
