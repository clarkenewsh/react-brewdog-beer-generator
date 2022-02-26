import cssClass from './Beer.module.css'

const Beer = ({ beer }) => {
 return (
    <div className={cssClass.beerDetails}>
        <h1>{beer.name}</h1>
        <h4>{beer.tagline}</h4>
        {/* <p>{ beer.description }</p> */}
        <img src={beer.image_url}></img>
        
        <p>Pair with food: {beer.food_pairing}</p>
    </div>
 )
};

export default Beer;
