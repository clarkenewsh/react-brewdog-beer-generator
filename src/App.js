import './App.css';
import { useState, useEffect } from 'react';

const App = () => {

  const [randomBeer, setRandomBeer] = useState('');
  const [isError, setIsError] = useState('');

  const handleData = async () => {
    try {
      const response = await fetch('https://api.punkapi.com/v2/beers/random');
       console.log(response);

      if(response.status !== 200) {
        console.log("error");
        throw new Error ('Error fetching data');
      }
       // parse data into json
       const data = await response.json();
      //  console.log(data[0].name);
       setRandomBeer(data[0].name);
       console.log(randomBeer);

    // catch errors that occur in the try - throw error message generated from the throw new Error
    } catch(error) {
      setIsError(error.message);
      console.log(isError);
    }
  }

  // use effect hook to load advice response data on page load - using [] dependency to update on load
  useEffect(() => {
    handleData();
  }, [])

  if(isError) {
    return <div>{isError}</div>
  }

  return (
    <div>
      <h1>Brewdog Random beer generator</h1>
      <h2>Todays random brewdog is: {randomBeer}</h2>
      <button onClick={handleData}>Get random beer</button>
    </div>
  )
}
export default App;
