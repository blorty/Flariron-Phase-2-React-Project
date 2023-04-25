import React, { useEffect, useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Search from "./Search";
import Header from "./Header";

function App () {
    const [batData, setBatmanData] = useState([]);

    const [input, setInput] = useState("");

    const searchedBatData = batData.filter((batItem) => {
      return batItem.title.toLowerCase().includes(input.toLowerCase());
    });

    useEffect(() => {
        fetch("http://localhost:6001/movies")
        .then((res) => res.json())
        .then((batData) => setBatmanData(batData));
        }, []);

    return (
        <div className="App">
        <Header input={input} setInput={setInput} />
        <Container batData={searchedBatData} />
        </div>
    )
}

export default App;