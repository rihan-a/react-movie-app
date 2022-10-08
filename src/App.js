import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard.jsx";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=5afa1f51";

const MovieTest = {
    Title: "The Matrix",
    Year: "1999",
    imdbID: "tt0133093",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
};

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies(searchTerm);
    }, []);

    return (
        <div className="app">
            <h1>LIESEFLIX</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                    value={searchTerm}
                />
                <img
                    src={SearchIcon}
                    alt="search icon"
                    onClick={() => {
                        searchMovies(searchTerm);
                    }}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    {" "}
                    <h2>No Movies found</h2>
                </div>
            )}
        </div>
    );
};

export default App;
