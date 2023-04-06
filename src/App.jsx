import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"
import "./App.css"
import PropTypes from "prop-types"
import { useState } from "react"


function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0)
  const currentPokemon = pokemonList[pokemonIndex]
  return (
    <body>
      <h1>POKEDEX</h1>
      <div className="pokedex">
        <div>
          <PokemonCard pokemon={currentPokemon} />

        </div>
        < div className="navigation">
          <NavBar pokemonList={pokemonList} pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} />
        </div>
      </div>
    </body >
  )
}

const pokemonList = [
  {
    name: "BULBIZARRE",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "SALAMECHE",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "CARAPUCE",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "PIKACHU",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "MEW",
  },
];

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}


export default App