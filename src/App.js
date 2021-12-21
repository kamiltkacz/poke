import "./Styles.css";
import Pokes from "./GetPokemon.js";
import SearchBar from "./SearchBar";
import PokesData from "./Data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-poke">
          <span className="title-span">Pokédex</span>
        </div>
        <SearchBar placeholder="Enter name or number..." data={PokesData} />
        <Pokes />
      </header>
    </div>
  );
}

export default App;
