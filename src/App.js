import { useState } from "react";
import "./App.css";

import MovieCard from "./MovieCard.jsx";
import SearchField from "./SearchField.js";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [msg, setMsg] = useState("");

    const isSearchCheck = (bol) => {
        if (bol) {
            setMsg("No Movies found");
        } else {
            setMsg("");
        }
    };

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className="app">
            <h1 onClick={refreshPage}>MOVIEFLIX</h1>

            {/* Input search field that collects the title provided by the user and updates the searchTerm state  */}
            <SearchField
                onSetMovies={setMovies}
                onSearchCheck={isSearchCheck}
            />

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>{msg}</h2>
                </div>
            )}
        </div>
    );
};

export default App;
