import React from 'react'
import './MovieContainer.css'

const MovieContainer = (props) => {
    return (
        <div className="movieContainer">   
            {props.children}
        </div> 
    )
}

export default MovieContainer