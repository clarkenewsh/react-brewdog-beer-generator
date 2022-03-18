import cssClass from './Beer.module.css'

const Beer = ({ beer }) => {
 return (
    <div className={cssClass.beerDetails}>
        <h1>{beer.name}</h1>
        <h4>{beer.tagline}</h4>
        {/* <p>{ beer.description }</p> */}
        <img src={beer.image_url} alt={'random brewdog beer'}></img>
        
        <p><strong>Pair with food:</strong> {beer.food_pairing}</p>
    </div>
 )
};

export default Beer;
