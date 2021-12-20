import React from "react";

export default function Pokes() {
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

  let renderedOutput = pokemons.map((pokemon) => (
    <div className="infodiv" style={{ flex: 1, flexBasis: "25%" }}>

     <div className="imgDiv"><img src={pokemon.img} alt="" /></div> <div className="numDiv">{pokemon.num}</div> <div className="nameDiv>">{pokemon.name}</div> <div className="typeDiv">{pokemon.type}</div>
    </div>
  ));



  return (
    <main>
      <div>


        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {renderedOutput}
        </div>
      </div>
    </main>
  );
}
