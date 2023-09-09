import React, { useState } from "react";
import "./CSS/Searchbar.css";
function SearchBar(props) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for: ${query}`);
  };

  return (
    <div className="search-bar ">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className="search"
      />
      <button className="search" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
