import './App.css';
import { useState, useEffect } from 'react';

const App = () => {

  const [randomBeer, setRandomBeer] = useState('');
  const [allBeers, setAllBeers] = useState('');
  const [isError, setIsError] = useState({
    error: false,
    message: ''
  });

  // fetch single random beer
  const handleData = async () => {
    try {
      const response = await fetch('https://api.punkapi.com/v2/beers/random');
       console.log(response);

      if(response.status !== 200) {
        console.log("error");
        throw new Error ('oooops...could not return data');
      }
       // parse data into json
       const data = await response.json();
      //  console.log(data[0].name);
       setRandomBeer(data[0]);
       console.log(randomBeer);

    // catch errors that occur in the try - throw error message generated from the throw new Error
    } catch(error) {
      setIsError({ error: true, message: error.message})
      console.log(isError);
    }
  }


  // fetch all beers
  const handleAllData = async () => {
    try {
      const response = await fetch('https://api.punkapi.com/v2/beers');
       console.log(response);

      if(response.status !== 200) {
        console.log("error");
        throw new Error ('oooops...could not return data');
      }
       // parse data into json
       const data = await response.json();
      //  console.log(data[0].name);
       setAllBeers(data);
       console.log(allBeers);

    // catch errors that occur in the try - throw error message generated from the throw new Error
    } catch(error) {
      setIsError({ error: true, message: error.message})
      console.log(isError);
    }
  }

  // use effect hook to load random beers and allBeers response data on page load - using [] dependency to update on load
  useEffect(() => {
    handleData();
    handleAllData();
  }, [])

  
  if(isError.error) {
    return <div>{isError.message}</div>
  }

  // loading condition to ensure that the data has time to be returned before the beers data is rendered
  if(!randomBeer) {
    return <h2>Loading....</h2>
  }

  return (
    <div>
      <h1>Brewdog Random beer generator</h1>
      <h2>Todays random brewdog is: {randomBeer.name}</h2>
      <h6>Todays random brewdog is: {randomBeer.description}</h6>
      <img src={randomBeer.image_url} />
      <button onClick={handleData}>Get random beer</button>
      {allBeers.map((beer, index) => {
        return (
          <div key={index}>
            <h1>{beer.name}</h1>
            <h4>{beer.tagline}</h4>
        </div>
        ) 
      })}
    </div>

  )
}
export default App;
