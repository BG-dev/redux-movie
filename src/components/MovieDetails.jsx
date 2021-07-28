import React from "react"
import { connect} from "react-redux"
import "./MovieDetails.scss"

function MovieDetails(props){

    return(
        <div className="details">
            <h2 className="details-title">Movie</h2>
            <div className="details__properties">
                {props.selectedMovie ? (
                    <div className="details__properties-text">
                        <p>Title: {props.selectedMovie.title}</p>
                        <p>Release Date: {props.selectedMovie.releaseDate}</p>
                        <p>Rating: {props.selectedMovie.rating}</p>
                    </div>
                 ) : <p>Select Movie!</p> }
                 {props.selectedMovie && <img src={props.selectedMovie.path} alt="" />}
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(MovieDetails);