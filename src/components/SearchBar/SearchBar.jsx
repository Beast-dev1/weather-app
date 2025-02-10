import React from "react";
import "./SearchBar.css";

const SearchBar = ({ city, onCityChange, onSearch, loading }) => {
  // Handle "Enter" key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={onSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
};

export default SearchBar;
