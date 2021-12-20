


import './Styles.css';
import Pokes from "./GetPokemon.js";
//  import NameForm from "./Input.js";

 import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";
// import GetPoki from "./GetPoki.js";
// import MyComponent from './hooksPoki.js';






function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-poke">Pokedex</div>

        <SearchBar placeholder="Enter a Book Name..." data={BookData} />

        {/* <NameForm /> */}


        <Pokes />

      </header>
    </div>
  );
}

export default App;
