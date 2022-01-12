import { useState, useEffect } from "react";

import Swal from 'sweetalert2';

import SearchBox from "./components/SearchBox ";
import LocationInfo from "./components/LocationInfo";

const getRandomId = max => Math.floor( Math.random() * max );

const App = () => {
  const [location, setLocation] = useState( null );  

  useEffect(() => {
    setLocationByID( getRandomId( 126 ) );
  },[]);

  const setLocationByID = async ( id ) => {
    if( id !== undefined && id !== null && id !== '' ) {
      if( !isNaN(id) && ( id >= 1 && id <= 126 ) ) {
        let _location = await fetchLocationByID( id );

        setLocation( _location );
      }else {
        Swal.fire({
          icon: 'error',
          title: 'Important!',
          text: 'The location id needs to be a number between 1 and 126'
        });
        setLocation(null);
      }
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Important!',
        text: 'You need to type a location id'
      });
      setLocation(null);
    }
  }

  const fetchLocationByID = async ( id ) => {
    const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`);  
    const data = await response.json();

    return data;    
  };

  return (
    <div className="App">
        <header className="container-fluid py-3">
            <div className="title-container d-flex align-items-center justify-content-center mb-4">
              <h1>React Ricky n Morty Wiki</h1>
            </div>
            <div className="search-box-container">
              <SearchBox 
                setLocationByID={setLocationByID}
               />
            </div>
        </header>
        <hr/>
        <div className="container-fluid my-3">
          <div className="row">
            <div className="col-12">
              { location && <LocationInfo location={location} /> }
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;