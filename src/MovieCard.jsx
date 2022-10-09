import React from "react";

const MovieCard = ({ movie }) => {
    // Url to the imdb page for the clicked movie
    const imdbUrl = `https://www.imdb.com/title/${movie.imdbID}/`;

    return (
        <div className="movie" onClick={() => window.open(imdbUrl, "_blank")}>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img
                    src={
                        movie.Poster !== "N/A"
                            ? movie.Poster
                            : "https://via,placeholder.com/400"
                    }
                    alt={movie.Title}
                />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;
