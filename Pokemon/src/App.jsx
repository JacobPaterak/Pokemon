import { useState } from "react";
import "./App.css";
import SearchedPokemon from "./SearchedPokemon";

function App() {
  //creates state
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <div>
        <h1>Search Pokemon</h1>
        <label>Input Pokemon Name</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <p>{inputValue}</p>
      </div>
    </>
  );
}
export default App;
