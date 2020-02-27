import React from 'react'

class SearchBar extends React.Component {
    state = {
        searchItem: ''
    }

    onInputChange = (e) => {
        this.setState({ searchItem: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.state.searchItem)
    }

    render() {
        return (
            <div>
                 <form onSubmit={this.onFormSubmit}>
                     <label>Movie Search: </label>
                     <input 
                        type="text"
                        value={this.state.searchItem}
                        onChange={this.onInputChange} 
                     />
                 </form>
            </div>
        )
    }
}

export default SearchBar