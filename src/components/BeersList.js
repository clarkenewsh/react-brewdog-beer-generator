import React from 'react';
import Beer from './Beer';
import cssClass from './BeersList.module.css'

const BeersList = ({ allBeers, title }) => {
  return (
    <div>
        <h1>{ title }</h1>
        <div className={cssClass.beersList}>
            
            {allBeers.map((beer, index) => {
                return <Beer key={index} beer={beer} />
            })}
        </div>
    </div>
  )
};

export default BeersList;
