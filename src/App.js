import { useState } from "react";
import "./App.css";

import MovieCard from "./MovieCard.jsx";
import SearchField from "./SearchField.js";

const App = () => {
    const [movies, setMovies] = useState([]);

    return (
        <div className="app">
            <h1>MOVIEFLIX</h1>

            {/* Input search field that collects the title provided by the user and updates the searchTerm state  */}
            <SearchField onSetMovies={setMovies} />

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty"> {/* <h2>No Movies found</h2> */}</div>
            )}
        </div>
    );
};

export default App;
