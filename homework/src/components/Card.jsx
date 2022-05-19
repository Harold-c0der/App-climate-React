import React from 'react';

export default function Card({max,min,name,img,onClose,identificador}) {
  const URL =  `http://openweathermap.org/img/wn/${img}@2x.png`
  // acá va tu código
  return(
    <div id='mycard'>
      <div className='boton'>
        <button className='btn-danger' onClick={() => onClose(identificador)}> - </button>
      </div>
        <h5> - {name} -</h5>
        <div className='bottom-date'>
          <div className='maxmin'>
        <span>Max</span> 
        <span>Min</span>  
        <span>{max}°C</span> 
        <span>{min}°C</span>
          </div>
        <img src= {URL} alt="" />
        </div>
    </div> 
    ); 
};