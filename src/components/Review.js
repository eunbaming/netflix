import React from 'react';
import { Container } from 'react-bootstrap';

const Review = ({item}) => {
  return (
    <Container>
      <div className='review-author'>{item?.author}</div>
      <div>{item?.content}</div>
      <hr />
    </Container>
  )
};

export default Review;
