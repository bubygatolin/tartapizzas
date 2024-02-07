import './HeroImgStyles.css';

import React from 'react'

import IntroImg from '../assets/load.png';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt='IntroImg' />
        </div>
        <div className='content'>
            <h1>Pizza Fermentação Natural</h1>
            <p>▪️Pizza Clássica Italiana, individuais 25cm.<br></br>
              ▪️24h de fermentação/maturação.<br></br>
              ▪️Eventos na sua casa/trabalho/lazer.<br></br>
              ▪️Massas pré-assadas sob encomenda.
            </p>          
        
            <div style={{marginTop:'30px'}}>
                <Link to={'/flores'}className='btn btn-light'>Pizzas</Link>
                <Link to={'/presentes'}className='btn btn-light'>Molhos</Link>
                <Link to={'/contato'}className='btn btn-light'>Contato</Link>
            </div>
        </div>
    </div>
  );
};

export default HeroImg