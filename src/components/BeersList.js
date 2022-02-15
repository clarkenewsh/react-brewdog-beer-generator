import React from 'react';
import Beer from './Beer';

const BeersList = ({ allBeers, title }) => {
  return (
    <div>
        <h1>{title}</h1>
        {allBeers.map((beer, index) => {
            return <Beer key={index} beer={beer} />
        })}
    </div>
  )
};

export default BeersList;
