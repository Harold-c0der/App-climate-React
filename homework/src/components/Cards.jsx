import React from 'react';
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
    {props.cities?.map((ciudad, index) => {
      return (
        <Card
          key={ciudad.id}
          max={ciudad.max}
          min={ciudad.min}
          img={ciudad.img}
          onClose={props.onClose}
          name={ciudad.name}
          identificador={ciudad.id}
        />
      );
    })}
  </div>
  )
};