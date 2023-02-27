import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import MoviesAll from '../components/MoviesAll';
import GenreButton from '../components/GenreButton';
import Pagination from "react-js-pagination";
import { movieAction } from '../redux/actions/movieAction';
import { ClipLoader } from 'react-spinners';

const Movies = ({keyword, setKeyword}: {keyword: String, setKeyword: React.Dispatch<React.SetStateAction<string>>}) => {
  const dispatch = useDispatch();
  const {popularMovies, genreList, loading, searchMovies} = useSelector((state) => state.movie);
  const [page, setPage] = useState(1);
  console.log('searchMovies', searchMovies);

  const handlePageChange = useCallback((page) => {
    setPage(page);
    dispatch(movieAction.getSearch(page, keyword));
  }, []);

  useEffect(() => {
    if (keyword.length > 0) {
      dispatch(movieAction.getSearch(page, keyword));
    }
  }, [keyword, page]);

  if (loading) {
    return <div className='loading'><ClipLoader color="fff" loading={loading} size={150} /></div>
  };
  return (
    <Container>
      <Row>
        <Col lg={3} md={3}>
            <h3 className='genres'>Genres</h3>
            <Row>
              {genreList.map((item) => (<Col md={6} sm={3} xs={4}><GenreButton key={item.id} item={item.name} setKeyword={setKeyword} /></Col>))}
            </Row>
        </Col>
        <Col lg={9} md={9}>
          <Row>
          {keyword.length > 0 && searchMovies.results ? searchMovies.results.map((item) => (
                <Col md={6} sm={12}><MoviesAll item={item}/></Col>
              )) : popularMovies.results.map((item) => (
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
          </Row>
        </Col>
      </Row>
    </Container>
  )
};

export default Movies;
