import React, { useState } from "react";
import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';


function App() {
  let key = "4ae2636d8dfbdc3044bede63951a019b";
  const [ciudades, setCiudades] = useState([]);


  function onSearch(ciudad) {
    // ACA habria que hacer el llamado a la api, para obtener los datos de la ciudad
    // se lo paso a la <Nav/>

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          console.log(ciudad);
          setCiudades([...ciudades, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    return;
  }

  
  function onClose(id) {
    setCiudades((estadoViejo) => estadoViejo.filter((el) => el.id !== id));
  }

  return (
    <div className="App">
      <div className='SearchBar-father'>
        <SearchBar
          onSearch={onSearch}
        />
      </div>
      <div>
      <Cards cities={ciudades} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
