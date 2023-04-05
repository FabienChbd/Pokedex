import PokemonCard from "./components/PokemonCard"
import "./App.css"
import PropTypes from "prop-types"
import { useState } from "react"


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)
  const currentPokemon = pokemonList[pokemonIndex]

  const handleClickPrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1)
    }
  }

  const handleClickNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1)
    }
  }

  return (
    <body>
      <h1>POKEDEX</h1>
      <div className="pokedex">
        <div>
          <PokemonCard pokemon={currentPokemon} />
        </div>
        < div className="navigation">
          {pokemonIndex > 0 && < button onClick={handleClickPrevious}>Précédent</button>}
          {pokemonIndex < pokemonList.length - 1 && <button onClick={handleClickNext}>Suivant</button>}
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
