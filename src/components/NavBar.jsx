
import React, { useState } from 'react';

function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }) {



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

    const handleClickIndex = (index) => {
        setPokemonIndex(index);
    }
    return (
        <>
            <div className="navigation">
                {pokemonIndex > 0 && < button onClick={handleClickPrevious}>Précédent</button>}
                {pokemonIndex < pokemonList.length - 1 && <button onClick={handleClickNext}>Suivant</button>}
            </div>
            <div className="navigation">
                {pokemonList.map((pok, index) => (<button key={index} onClick={() => handleClickIndex(index)}>
                    {pok.name}</button>))}
            </div>
        </>
    )

}

export default NavBar

