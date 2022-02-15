
const Beer = ({ beer }) => {
 return (
    <div>
        <h1>{beer.name}</h1>
        <h4>{beer.tagline}</h4>
        {/* <img src={beer.image_url}></img> */}
    </div>
 )
};

export default Beer;
