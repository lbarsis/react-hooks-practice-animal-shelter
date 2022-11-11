import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
    fetch('http://localhost:3001/pets')
    .then(r => r.json())
    .then(pets => setPets(pets))
  }, []);

  function handleFilter(e) {
    setFilters({type: e.target.value})
  }

  function updateAdoptionStatus(updatedPet) {
    const displayPets = pets.map(pet => {
      if (pet.id === updatedPet.id) {
        return updatedPet
      } else {
        return pet
      }
    })
    setPets(displayPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters pets={pets} onFilter={handleFilter}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoption={updateAdoptionStatus} filters={filters}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
