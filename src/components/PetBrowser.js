import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoption, filters}) {

  const filteredPets = pets.filter(pet => {
    if (filters.type === 'all') {
      return pet
    } else{
      return pet.type === filters.type
    }
  })

  const displayPets = filteredPets.map(pet => {
    return <Pet key={pet.id} pet={pet} onAdoption={onAdoption} />
  })

  return <div className="ui cards">{displayPets}</div>;
}

export default PetBrowser;
