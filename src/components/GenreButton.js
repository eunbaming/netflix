import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';

const GenreButton = ({item, setKeyword}: {item: String, setKeyword: React.Dispatch<React.SetStateAction<string>>}) => {

  const onClick = useCallback((item) => {
    setKeyword(item);
  }, []);

  return (
    <div className='genre-button'>
      <Button onClick={() => onClick(item)} variant="danger">{item}</Button>
    </div>
  )
};

export default GenreButton;
