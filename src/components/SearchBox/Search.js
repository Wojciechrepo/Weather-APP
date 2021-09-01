import React from "react";
import "./Search.css";

const Search = () => {
    return (
        <div className="container">
            <input
                type="text"
                className="form-control text-center"
                placeholder="Location.."
            />
        </div>
    );
};

export default Search;