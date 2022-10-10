import React from "react";

const MovieCard = ({ movie }) => {
    // Url to the imdb page for the clicked movie
    const imdbUrl = `https://www.imdb.com/title/${movie.imdbID}/`;

    return (
        <div className="movie" onClick={() => window.open(imdbUrl, "_blank")}>
            <div className="movie-poster">
                <img
                    src={
                        movie.Poster !== "N/A"
                            ? movie.Poster
                            : "https://via.placeholder.com/400"
                    }
                    alt={movie.Title}
                />
            </div>
            <div className="movie-desc">
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
        </div>
    );
};

export default MovieCard;
