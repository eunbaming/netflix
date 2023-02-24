import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import MoviesAll from '../components/MoviesAll'

const Movies = () => {
  const {popularMovies, topRatedMovies, upComingMovies, loading} = useSelector((state) => state.movie)
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} md={4}></Col>
          <Col lg={8} md={8}>
                <Row>
                    {popularMovies.results && popularMovies.results.map((item) => (
                      <Col md={6} sm={12}><MoviesAll item={item}/></Col>
                    ))}
                </Row>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Movies
