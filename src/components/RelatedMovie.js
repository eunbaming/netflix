import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Badge} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { detailAction } from '../redux/actions/detailAction';

const RelatedMovie = ({item}) => {
  const {genreList} = useSelector(state => state.detail);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToMovieDetail = () => {
    navigate(`/movies/${item.id}`)
    dispatch(detailAction.getMovieDetail(item.id))
  };

  return (
    <div
    className='movie-size'
    style={{backgroundImage : "url(" + `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/${item.poster_path}` + ")"}}
    onClick={goToMovieDetail}
    >
      <div className='overlay'>
        <h4 className='movie-title'>{item.title}</h4>
        <div>{item.genre_ids.map(
          (id) => (<Badge bg="danger" className='card-genre'>{genreList.find((item) => item.id == id).name}</Badge>)
          )}
        </div>
        <div className='card-detail'>
          <span>{item.vote_average}</span>
          <span className='adult'>{item.adult ? "Up 19" : "Under 18"}</span>
        </div>
      </div>
    </div>
  )
};

export default RelatedMovie;
