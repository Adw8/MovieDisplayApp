import React from "react";
const ImageApi = "https://image.tmdb.org/t/p/original";
const Movie = ({title, poster_path, overview, vote_average}) =>(
    <div className="movie">
        <img src = {ImageApi + poster_path} alt ='' />
        <div className="movie-info">
            <h3> {title}</h3>
            <span>{vote_average}</span>
        </div>       
        <div className="movie-hover">
        <h2>Overview:</h2>
        <p>{overview}</p>
        </div>
    </div>

);
export default Movie;
