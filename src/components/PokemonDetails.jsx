import React from 'react'

const PokemonDetails = ({weight, height, isExpanded}) => {
  return (
    <div className={isExpanded ? "ExpandedCard show" : "ExpandedCard"}>
        <div>
            <div className="detail-wrapper">
                <h4>Weight: {weight}</h4>
                <h4>Height: {height}</h4>
            </div>
        </div>
    </div>
  )
}

export default PokemonDetails