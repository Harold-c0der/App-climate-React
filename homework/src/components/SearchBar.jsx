import React from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { GrInstagram } from 'react-icons/gr';
import { GrLinkedinOption } from 'react-icons/gr';






export default function SearchBar(props) {
  // acá va tu código
  return (
    <>
  <nav className='form-Container'>
    <div className='from'>
    <form>
        <input type="text" autoComplete='off' name='clima' placeholder='Ciudad...'/>
        <button onClick={()=> props.onSearch('Denver')}><FaSearchLocation/></button>
    </form>
    </div>
    <div className='Text'>
      <p> <i> Consulta <br />el clima  desde donde <br /> quieras cuando quieras</i></p>
    </div>
    <section className='icons'>
      <a href="https://api.whatsapp.com/send?phone=593981817022&text=Buenas%20Tardes" target="_blank" rel='noreferrer'>
      <span  className='Whatsapp'><AiOutlineWhatsApp/></span> 
      </a>
      <a href="https://www.instagram.com/https.haroldev/" target="_blank" rel='noreferrer'>
      <span className='Instagram'><GrInstagram/></span>
      </a>
      <a href="https://www.linkedin.com/in/harold-tenorio-galvan-42a040239/" target="_blank" rel='noreferrer'>
      <span className='Linkedin'><GrLinkedinOption/></span>
      </a>
    </section>
  </nav>
  </>
  );
};



