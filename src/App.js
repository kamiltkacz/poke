
import './Styles.css';
import Blah from "./GetPokemon.js";
import NameForm from "./Input.js";
import GetPoki from "./GetPoki.js";
import MyComponent from './hooksPoki.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-poke">Pokedex</div>
        <p>
         Name or Number.
        </p>
        <NameForm />

        <Blah />

        <MyComponent />

        <GetPoki />

      </header>
    </div>
  );
}

export default App;
