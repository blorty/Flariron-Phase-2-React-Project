import React from "react";
import Search from "./Search";

function Header({ input, setInput }) {
  return (
    <header>
      <h1>
        BatBook
      </h1>
      <Search input={input} setInput={setInput} />
    </header>
  );
}

export default Header;