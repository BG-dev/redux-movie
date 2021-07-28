import React from 'react';
import {connect} from 'react-redux'
import { selectMovie } from '../actions';
import "./MovieList.scss"

function MovieList(props){
    
    return(
        <div className="movies">
            <h2 className="movies-title">Movie List</h2>
            <ul className='movies__list'>
                {props.movies.map(movie => (
                    <li className={'movies__list-item' + (props.selectedMovie && movie.title === props.selectedMovie.title ? ' active' : '')} key={movie.title} onClick={() => 
                    {
                        props.selectMovie(movie)
                        console.log(props.selectedMovie)
                    }}>
                        <span>{movie.title}</span>
                    </li>
                ))}
            </ul>  
        </div>
    )
}

const mapStateToProps = state => {
    return{
        movies: state.movies,
        selectedMovie: state.selectedMovie
    }
}

const mapDispatchToProps = {
    selectMovie: selectMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);