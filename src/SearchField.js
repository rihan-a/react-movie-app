import { useState } from "react";
import SearchIcon from "./search.svg";
import "./SearchField.css";

// OMDB API URL for Movies
const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=5afa1f51";

const SearchField = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    // async function to fetch the searched movie data from the API
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        props.onSetMovies(data.Search);
        //console.log(data.Search === undefined);

        props.onSearchCheck(data.Search === undefined);

        //console.log(data);
    };

    return (
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
    );
};

export default SearchField;
