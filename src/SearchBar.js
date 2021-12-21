import React, { useState } from "react";

function SearchBar({ placeholder }) {
  const [filteredData, setFilteredData] = useState([]);
  const [filteredDataNum, setFilteredDataNum] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [numberEntered, setNumberEntered] = useState("");
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

    // console.log(newFilter);
  };

  const handleFilterNum = (event) => {
    const searchNumber = event.target.value;
    setNumberEntered(searchNumber);

    const newFilterNumber = pokemons.filter((value) => {
      return value.num.includes(searchNumber);
    });
    console.log(newFilterNumber);

    if (searchNumber === "") {
      setFilteredDataNum([]);
    } else {
      setFilteredDataNum(newFilterNumber);
    }
    // console.log(newFilter);
  };

  let checkConsole = () => alert("Check the console :)");

  const [style, setStyle] = useState("");

  const changeStyle = () => {


    setStyle("dataResultTwo");
  };



  return (
    <div className="search-div">
      <p className="search-text">Name or Number</p>
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={(e) => {
              handleFilter(e);
              handleFilterNum(e);
            }}
          />
          {/* <input type="text" value={numberEntered} pattern="[0-9]*" onChange={handleFilterNum} /> */}

          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            class="svg-inline--fa fa-search fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={changeStyle}
            id="loop-svg"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
          <div className="svg-div" onClick={changeStyle}></div>
        </div>  {/* search inputs end */}


          {filteredData.length !== 0 && (
            <div className={style}>
            <div className="dataResult" >
              {filteredData.slice(0, 15).map((value) => {
                return (
                  // <a
                  //   className="dataItem"
                  //   href={value.name}
                  //   target="_blank"
                  //   alt=""
                  // >
                  <div className="dataItem">

                  <p>{value.num}</p>
                   <img src={value.img} alt="" />
                  <p className="name-par">{value.name}</p>
                  </div>
                  // </a>
                );
              })}
            </div>
            </div>
          )}
          {filteredDataNum.length !== 0 && (
             <div className={style}>
            <div className="dataResult">
              {filteredDataNum.slice(0, 10).map((value) => {
                return (
                  // <a
                  //   className="dataItem"
                  //   href={value.num}
                  //   target="_blank"
                  //   alt=""
                  // >  {/* </a> */}

                  <div className="dataItem">
                  <p>{value.num}</p>
                   <img src={value.img} alt=""  />
                  <p>{value.name}</p>
                    </div>

                );
              })}
              </div>
            </div>
          )}
         {/* <div className={style}>

           </div> */}




      </div>
    </div>
  );
}

export default SearchBar;
