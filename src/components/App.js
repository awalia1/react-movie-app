import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import MoviesList from './MoviesList'


class App extends React.Component {
    state = {
        movies: []
    }

    //would need to put in .env 
    apiKey = "063d9c48e0d2191121260a1c33577c0f"

    onSearchSubmit = (searchItem) => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${searchItem}`)
        .then(response => {
            this.setState({ movies: response.data.results })
        })
    }

    render() {
        return(
            <div>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <MoviesList movies={this.state.movies}/>
            </div>
        )
    }
}

export default App