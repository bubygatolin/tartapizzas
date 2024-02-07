import './EventContentStyles.css';

import React from 'react'
import { Link } from 'react-router-dom';

import Event1 from '../assets/logo.jpeg';
import Event2 from '../assets/pizza.jpg';

const EventContent = () => {
  return (
    <div className='event'>
        <div className='left'>
            <h1 style={{color:'#e1dada'}}>Nossos Eventos</h1>
            <p style={{color:'#e1dada'}}>Fazemos seu evento com as melhores pizzas de SP!!! Faça um orçamento!</p>
            <Link to={'/contato'}>
                <button className='btn'>Contato</button>
            </Link>
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={Event1}
                    className='img' alt='true'
                    />
                </div>
                <div className='img-stack bottom'>
                    <img src={Event2}
                    className='img' alt='true'
                    />
                </div>
            </div>  
        </div>
        
    </div>
  )
}

export default EventContent