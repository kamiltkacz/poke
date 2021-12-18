
import React from "react"

export default function Blah() {
    const [pokemonData] = React.useState({})


    fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
        .then(res => res.json())
        .then(data => console.log(data))




    return (
      <main>

         <div>
            <pre>{JSON.stringify(pokemonData, null, 2)}</pre>
        </div>
      </main>

    )
}

