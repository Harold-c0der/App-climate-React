import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data from './data.js';


function App() {
  return (
    <div className="App">
      <div className='SearchBar-father'>
        <SearchBar
          onSearch={(ciudad) => console.log(ciudad)}
          img = {'./a41d84a485d960.png'}
        />
      </div>
      <div>
        <Cards
          cities={data}
        />
      </div>
    </div>
  );
}

export default App;
