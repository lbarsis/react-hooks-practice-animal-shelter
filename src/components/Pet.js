import React from "react";


function Pet({ pet, onAdoption }) {
  const { id, type, gender, age, weight, name, isAdopted } = pet

  function handleAdoption() {
    fetch(`http://localhost:3001/pets/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...pet,
        isAdopted: !isAdopted
      })
    })
      .then(r => r.json())
      .then(updatedPet => onAdoption(updatedPet))
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ?
          <button className="ui disabled button">Already Adopted</button> :
          <button className="ui primary button" onClick={handleAdoption}>Adopt</button>}
      </div>
    </div>
  );
}

export default Pet;
