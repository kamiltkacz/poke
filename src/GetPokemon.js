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
    <div
      className="infodiv"
      style={{ flex: 1, flexBasis: "25%", color: "black", background: "white" }}
    >
      <div className="img-div">
        <img src={pokemon.img} alt="" style={{ transform: "scale(1.1)" }} />
      </div>{" "}
      <div className="num-div">
        <span className="hash-span">#</span>
        {pokemon.num}
      </div>
      <div className="name-div>">
        <span className="name-span">{pokemon.name}</span>
      </div>
      <div className="type-div">
        <div className="type-one">{pokemon.type[0]}</div>
        <div className="type-two">
          <span className="type-two-span">{pokemon.type[1]}</span>
        </div>
      </div>
    </div>
  ));

  return (
    <main>
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            paddingLeft: "40px",
            paddingTop: "40px",
            paddingRight: "80px",
            marginRight: "100px",
          }}
        >
          {renderedOutput}
        </div>
      </div>
    </main>
  );
}
