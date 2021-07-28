import { combineReducers } from "redux";

const moviesReducer = () => {
    return[
        {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4, path: "./img/1.jpg"},
        {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7, path: "./img/2.jpg"},
        {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4, path: "./img/3.jpg"},
        {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3, path: "./img/4.jpg"},
        {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9, path: "./img/5.jpg"}
    ]
}

const selectedMovieReducer = (state = null, action) => {
    switch(action.type){
        case 'MOVIE_SELECTED' : return action.payload;
        default: return state;
    }
}

export default combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer
})