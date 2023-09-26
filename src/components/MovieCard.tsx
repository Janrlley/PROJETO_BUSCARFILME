import React from 'react'
import { Link } from'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { IArray } from '../pages/Home'
interface Props {
    topFilms: IArray
    showLink?: boolean 
}

const MovieCard = ({topFilms, showLink}: Props) => {
    const imageUrl: string = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className='movie-card'>
        <img src={`${imageUrl}${topFilms.poster_path}`} alt={topFilms.title} />
        <h2>{topFilms.title}</h2>
        <p>
            <FaStar className='star'/> {topFilms.vote_average}
        </p>
        {showLink && <Link to={`/movie/${topFilms.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard