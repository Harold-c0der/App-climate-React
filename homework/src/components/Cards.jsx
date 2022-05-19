import React from 'react';
import cities from '../data';
import Card from './Card';



export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  if (!props.cities) {
    return(
    <h3>no enviaste el cities</h3>
    );
  }
  return ( 
  <div className='cards-container'>
    {
      cities.map((p,index) => <Card key={p.id}name={p.name} max={p.main.temp_max} min={p.main.temp_min} img={p.weather[0].icon} onClose={()=>{console.log(alert(p.name));}}/>)
    }
  </div>
  )
};