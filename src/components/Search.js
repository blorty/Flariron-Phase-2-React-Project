import React from "react";

function Search({ input, setInput }) {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">BatSearch:</label>
      <input
        value={input}
        type="text"
        id="search"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;