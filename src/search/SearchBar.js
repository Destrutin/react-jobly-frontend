import React, {useState} from "react";
import "./SearchBar.css"

function SearchBar({search}) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = e => {
        const {value} = e.target;
        setSearchTerm(value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        search(searchTerm.trim() || undefined);
        setSearchTerm(searchTerm);
    }

    return (
        <div className="SearchBar">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="searchTerm"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SearchBar;