import React, {useState, useEffect} from 'react'
import MovieCard from '../components/MovieCard'

import './MovieGrid.css'

export interface IArray {
    id: number
    title: string
    poster_path: string
    vote_average: number

}
export interface IResponse {
    results: []
}

const Home = () => {
    const [topFilms, setTopFilms] = useState<IArray[]>([])

    const fetchData = async(url: string) => {
        const res = await fetch(url)
        const data = await res.json() as IResponse

        setTopFilms(data.results)
    }

    useEffect(() => {
        const films = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19238ec24047b18b951fa4c44e69228d';
        fetchData(films)
    }, [])

  return (
    <div className='container'>
        <h2 className='title'>Melhores Filmes</h2>
        <div className='movies-container'>
            {topFilms.length === 0 && <p>Carregando...</p>}
            {topFilms.length > 0 && topFilms.map((film) => (
                <MovieCard key={film.id} topFilms={film} showLink={true}/> 
            ))}
        </div>
    </div>
  )
}

export default Home