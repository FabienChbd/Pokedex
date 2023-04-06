
import React, { useState } from 'react';



function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }) {



    const handleClickPrevious = () => {
        if (pokemonIndex > 0) {
            setPokemonIndex(pokemonIndex - 1)
            if (pokemonIndex - 1 === 3) {
                alert("pika pikachu !!!");
            }
        }
    }

    const handleClickNext = () => {
        if (pokemonIndex < pokemonList.length - 1) {
            setPokemonIndex(pokemonIndex + 1)
            if (pokemonIndex + 1 === 3) {
                alert("pika pikachu !!!");
            }
        }
    }
    return (
        <>
            {pokemonIndex > 0 && < button onClick={handleClickPrevious}>Précédent</button>}
            {pokemonIndex < pokemonList.length - 1 && <button onClick={handleClickNext}>Suivant</button>}
        </>
    )

}

export default NavBar

