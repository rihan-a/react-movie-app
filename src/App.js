import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
function App() {
    const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=5afa1f51";

    const MovieTest = {
        Title: "The Matrix",
        Year: "1999",
        imdbID: "tt0133093",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    };

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    };

    useEffect(() => {
        searchMovies("The Matrix");
    }, []);

    return (
        <div className="app">
            <h1>RIHANFLIX</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    onChange={() => {}}
                    value="batman"
                />
                <img src={SearchIcon} alt="search icon" onClick={() => {}} />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{MovieTest.Year}</p>
                    </div>
                    <div>
                        <img
                            src={
                                MovieTest.Poster !== "N/A"
                                    ? MovieTest.Poster
                                    : "https://via,placeholder.com/400"
                            }
                            alt={MovieTest.Title}
                        />
                    </div>
                    <div>
                        <span>{MovieTest.Type}</span>
                        <h3>{MovieTest.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
