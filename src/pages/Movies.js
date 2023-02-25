import React, { useCallback, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import MoviesAll from '../components/MoviesAll'
import MovieSort from '../components/MovieSort'
import Pagination from "react-js-pagination";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction'

const Movies = () => {
  const dispatch = useDispatch();

  const {popularMovies, topRatedMovies, upComingMovies, loading} = useSelector((state) => state.movie);

  const [page, setPage] = useState(1);
  const handlePageChange = useCallback((page) => {
    setPage(page);
    dispatch(movieAction.getMovies(page));
  }, []);

  return (
      <Container>
        <Row>
          <Col lg={4} md={4}>
            <div className='movie-sort'>
              <MovieSort />
            </div>
          </Col>
          <Col lg={8} md={8}>
            <Row>
              {popularMovies.results && popularMovies.results.map((item) => (
                  <Col md={6} sm={12}><MoviesAll item={item}/></Col>
                ))}
            </Row>
            <Row>
            <div className='my-pagination'>
              <Pagination
                activePage={page}
                itemsCountPerPage={20}
                totalItemsCount={popularMovies.total_results}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageChange}
              />
            </div>
            {/* <Paging page={page} handlePageChange={handlePageChange}/> */}
            </Row>
            <div>
              
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default Movies
