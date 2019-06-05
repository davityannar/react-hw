import React from 'react'
import { Link } from 'react-router-dom'
import './CardItem.scss'


const CardItem = (props) => {
  return (
    <div className='card'>
      <div className='card-image'>        
        <Link to={`/movies/${props.movieId}`} ><img src={props.imgSrc} /></Link>
      </div>
      <div className='card-description'>
        <div className='card-film-name' >
          <p className='card-film-title'><Link to={`/movies/${props.movieId}`}>{props.movieName}</Link></p>
          <span className='card-vote'>{props.movieVote}</span>
          <span className='card-year'>{props.movieAge}</span>
        </div>
        <p className='card-genre'>{props.movieGenre}</p>
      </div>
    </div>
  )
}

export default CardItem;





 
