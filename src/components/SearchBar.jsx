import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Location" />
      <input type="number" placeholder="Max Price" />
      <select>
        <option>Room Type</option>
        <option>Apartment</option>
        <option>House</option>
      </select>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;