import React from 'react'

const MoviesList = (props) => {
    const movies = props.movies.map((movie) => {
        return (
            <div key={movie.id}>
                <img alt={movie.title}src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} />
                <p>{movie.title}</p>
                <p>{movie.overview}</p>
            </div>
        )
    })

    return (
        <div>
            {movies}
        </div>
    )
}

export default MoviesList