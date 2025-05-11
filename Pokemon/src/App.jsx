import { useState } from "react";
import "./App.css";
import SearchedPokemon from "./SearchedPokemon";
import Types from "./Types";
import Weakness_Card from "./Weakness_Card";
import Strength_Card from "./Strength_Card";
import header from "./header.jsx";
import No_Effect from "./No_Effect.jsx";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [WeakAgainst, setWeakness] = useState([]);
  const [StrongAgainst, setStrength] = useState([]);
  const [NoEffectFrom, setNoEffectFrom] = useState([]);
  const [NoEffectTo, setNoEffectTo] = useState([]);
  const [HalfDamageTo, setHalfDamageTo] = useState([]);
  const [HalfDamageFrom, setHalfDamageFrom] = useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleShowMatchups = async (pokemon_name) => {
    const pokemon = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + pokemon_name
    );
    if (!pokemon.ok) {
      alert("Pokemon not found");
      throw new Error("Pokemon Not Found");
    }
    const data = await pokemon.json();
    const Pokemon_type = data.types.map((typeinfo) => typeinfo.type.name);
    const type = await fetch("https://pokeapi.co/api/v2/type/" + Pokemon_type);
    const Damage_Type = await type.json();
    const Pokemon_Weakness =
      Damage_Type.damage_relations.double_damage_from.map((t) => t.name);
    const Pokemon_Strength = Damage_Type.damage_relations.double_damage_to.map(
      (t) => t.name
    );
    const Pokemon_No_Effect_from =
      Damage_Type.damage_relations.no_damage_from.map((t) => t.name);
    const Pokemon_No_Effect_to = Damage_Type.damage_relations.no_damage_to.map(
      (t) => t.name
    );
    const Pokemon_Half_Damage_to =
      Damage_Type.damage_relations.half_damage_to.map((t) => t.name);
    const Pokemon_Half_Damage_from =
      Damage_Type.damage_relations.half_damage_from.map((t) => t.name);
    setPokemonTypes(Pokemon_type);
    setWeakness(Pokemon_Weakness);
    setStrength(Pokemon_Strength);
    setHalfDamageFrom(Pokemon_Half_Damage_from);
    setHalfDamageTo(Pokemon_Half_Damage_to);
    setNoEffectTo(Pokemon_No_Effect_to);
    setNoEffectFrom(Pokemon_No_Effect_from);

    setIsVisible(true); // Show components when clicked
  };
  //(inputValue)
  return (
    <>
      <div className="Main">
        <header />
        <h1>Search Pokémon</h1>
        <label>Input Pokémon Name:</label>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={() => handleShowMatchups(inputValue)}>
          Show Matchups
        </button>
        {isVisible && (
          <div className="Cards">
            <Strength_Card
              double={StrongAgainst}
              half={HalfDamageTo}
              noEffect={NoEffectTo}
            />

            <Weakness_Card
              double={WeakAgainst}
              half={HalfDamageFrom}
              noEffect={NoEffectFrom}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
