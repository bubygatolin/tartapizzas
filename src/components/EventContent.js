import './EventContentStyles.css';

import React from 'react'
import { Link } from 'react-router-dom';

import Event1 from '../assets/event1.jpg';
import Event2 from '../assets/event2.jpg';

const EventContent = () => {
  return (
    <div className='event'>
        <div className='left'>
            <h1>Nossos Eventos</h1>
            <p>Decoração de festas e mesas. Mesa posta, arranjos florais, jantares, festas, mini eventos. Consultoria, personalização e material. Será um prazer atender você!</p>
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