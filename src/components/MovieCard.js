import React from 'react'
import { Badge } from 'react-bootstrap'

const MovieCard = ({item}) => {
  // console.log("item", item)
  return (
    <div className='card-size' style={{backgroundImage : "url(" + `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/${item.poster_path}` + ")"}}>
      <div>
        <h4>{item.title}</h4>
        <div>{item.genre_ids.map(
          (id) => (<Badge bg="danger" className='card-genre'>{id}</Badge>)
          )}
        </div>
        <div className='card-detail'>
          <span>{item.vote_average}</span>
          <span className='adult'>{item.adult ? "Up 19" : "Under 18"}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
