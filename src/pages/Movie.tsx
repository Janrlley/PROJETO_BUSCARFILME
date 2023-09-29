import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { 
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import MovieCard from '../components/MovieCard'

import './Movie.css'
// import './Movietest.css'

export interface IArrayDetails {
  id: number
  title: string
  poster_path: string
  vote_average: number
  budget: number
  revenue: number
  runtime: number
  overview: string
}

const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState<IArrayDetails>()

  const getMovie = async(url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  }

  const formatCurrency = (num: number) => {
    return num.toLocaleString("en-US", {
      style: "currency",
      currency: 'USD'
    })
  }

  useEffect(() => {
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=19238ec24047b18b951fa4c44e69228d` 
    getMovie(movieUrl)
  }, [id])


  return (
    <div className='movie-page'>
      {movie && (
        <>
            <div className='movie-img'>
              <MovieCard topFilms={movie}/>
            </div>
          <div>
            <div className='description'>
              <h3>
                <BsFillFileEarmarkTextFill /> Descrição:
              </h3>
              <p>{movie.overview}</p>
            </div> 
            <div className='info'>
              <h3>
                <BsWallet2 /> Orçamento:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
              <h3>
                <BsGraphUp/> Receita:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
              <h3>
                <BsHourglassSplit /> Duração:
              </h3>
              <p>{movie.runtime} min</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Movie