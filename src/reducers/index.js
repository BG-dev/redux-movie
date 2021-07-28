import { combineReducers } from "redux";

const moviesReducer = () => {
    return[
        {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4, path: "https://www.film.ru/sites/default/files/movies/posters/12563387-975943.jpg"},
        {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7, path: "https://i.pinimg.com/736x/17/98/cf/1798cfb2120fcef2b1907047006db6ff.jpg"},
        {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4, path: "https://kinocub.net/uploads/posts/2017-11/15103356248s.jpeg"},
        {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3, path: "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"},
        {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9, path: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/36436c19800817.5632caf2c8025.jpg"}
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