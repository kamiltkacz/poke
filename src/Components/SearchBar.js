import React, { useState } from "react";
import "./SearchBar.css";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [pokemonData, setPokemonData] = React.useState({});

  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((res) => res.json())
      .then((data) => setPokemonData(data.pokemon));
  }, []);

  const allPokes = pokemonData;
  const pokemons = Object.values(allPokes);








  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = pokemons.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());

    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
     console.log(newFilter);
  };


  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  // function newFilterCopy(event) = pokemons.filter((value) => {
  //   return value.name.toLowerCase().includes(searchWord.toLowerCase());

  // });

  return (
    <div className="search-div">
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        {/* <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div> */}
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {/* {filteredData.slice(0, 15).map((value, key) => {
            return (

                // <p>{this.state.newFilter}</p>

            );
          })} */}


        </div>
      )}
    </div>
    </div>
  );
}

export default SearchBar;