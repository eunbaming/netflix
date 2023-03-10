import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailAction } from '../redux/actions/detailAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleLine, faStar } from '@fortawesome/free-solid-svg-icons';
import RelatedMovie from '../components/RelatedMovie';
import Review from '../components/Review';
import MovieTrailer from '../components/MovieTrailer';

const MovieDetail = () => {
  const {id} = useParams();
  const detail = useSelector(state => state.detail.movieDetail);
  const {movieReview} = useSelector(state => state.detail);
  const {relatedMovie} = useSelector(state => state.detail);
  const dispatch = useDispatch()

  const getMovieDetail = () => {
    dispatch(detailAction.getMovieDetail(id))
  };

  useEffect (() => {
    getMovieDetail()
  }, []);

  return (
    <Container className='detail-container'>
      <Row>
        <Col xl={6} lg={4} className='detail-img'>
          <div
          className='detail-img-size'
          style={{backgroundImage : "url(" + `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail.poster_path}` + ")"}}
          ></div>
        </Col>
        <Col xl={6} lg={8}>
          <div className='detail-content'>
            <div>
              <h2>{detail.title}</h2>
              <h5>{detail.tagline}</h5>
            </div>
            <div>
              <div>
                <span className='rating-people-adult'><FontAwesomeIcon icon={faStar} />{detail.vote_average}</span>
                <span className='rating-people-adult'><FontAwesomeIcon icon={faPeopleLine} />{detail.popularity}</span>
                <span className='rating-people-adult'>{detail.adult ? "Up 19" : "Under 18"}</span>
              </div>
              <hr />
              <p>{detail.overview}</p>
              <hr />
              <div className='budget-revenue-release-time'>
                <div>
                  <span className='detail-badge'>Budget</span>
                  <span>{detail.budget}</span>
                </div>
                <div>
                  <span className='detail-badge'>Revenue</span>
                  <span>{detail.revenue}</span>
                </div>
                <div>
                  <span className='detail-badge'>Release Day</span>
                  <span>{detail.release_date}</span>
                </div>
                <div>
                  <span className='detail-badge'>Time</span>
                  <span>{detail.runtime}</span>
                </div>
              </div>
              <hr />
            </div>
            <div>
              <MovieTrailer />
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className='tab-content'>
            <input type='radio' name='tabmenu' id='tab01' checked/>
            <label className='reviews-tab' htmlFor='tab01'>REVIEWS</label>
            <input type='radio' name='tabmenu' id='tab02' />
            <label htmlFor='tab02'>RELATED MOVIES</label>
      
            <div className='conbox con1 review-area'>
              <Row>
                {movieReview.map((review) => (
                  <Col lg={12} md={12}><Review item={review}/></Col>
                ))}
              </Row>
            </div>
            <div className='conbox con2 related-area'>
              <Row>
                {relatedMovie.map((related) => (
                  <Col md={6} sm={12}><RelatedMovie item={related}/></Col>
                ))}
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default MovieDetail;