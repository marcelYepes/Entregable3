
import { useRef, useState } from 'react';
import './App.css'
import LocationInfo from './components/LocationInfo';
import ResidentCard from './components/ResidentCard';
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation';

const App = () => {

  const [inputValue, setInputValue] = useState(getRandomLocation())
 
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const location = useFetch(url)

  const inputLocation = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputLocation.current.value);
  }

  return (
    <div className="App">
     <h1>Rick and Morty</h1>
     <form onSubmit={handleSubmit}>
      <input ref={inputLocation} type="text" />
      <button>Search</button>
     </form>
     <LocationInfo location={location} />
     <div>
      {
        location?.residents.map(url => (
          <ResidentCard 
            key={url}
            url={url}
          />
        ))
      }
     </div>
     
    </div>
  )
}

export default App
