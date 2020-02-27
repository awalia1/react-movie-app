import React from 'react'
import './MoviesList.css';
import MovieContainer from './MovieContainer';

const MoviesList = (props) => {
    const movies = props.movies.map((movie) => {
        return (
            <MovieContainer key={movie.id}>
            <div className="flexContainter">
                <img alt={movie.title}src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
                <div className="movieInfo">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </div>
            </div>
            </MovieContainer>
        )
    })

    return (
        <div>
            {movies}
        </div>
    )
}

export default MoviesList