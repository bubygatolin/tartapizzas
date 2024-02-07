import './PricingCardStyles.css';

import React from 'react'
import { Link } from 'react-router-dom';

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>Flores</h3>
                <span className='bar'></span>
                <p className='btc'> À partir de  <br />R$ 49,90 </p>
                <p>Buquê de Rosas</p>
                <p>Flore Boca de Leão</p>
                <p>Cravos</p>
                <Link to='/contato' className='btn'>
                    FAÇA SEU PEDIDO!
                </Link>                
            </div>
            <div className='card'>
                <h3>Cestas</h3>
                <span className='bar'></span>
                <p className='btc'> À partir de  <br />R$ 99,90 </p>
                <p>Cestas Café</p>
                <p>Cestas Dias Especias</p>
                <p>Cestas Fitness</p>
                <Link to='/contato' className='btn'>
                    FAÇA SEU PEDIDO!
                </Link>                
            </div>
            <div className='card'>
                <h3>Personalizados</h3>
                <span className='bar'></span>
                <p className='btc'> À partir de <br />R$ 119,90 </p>
                <p>Queijo e Vinho</p>
                <p>Flores e Vinho</p>
                <p>Chocolates e Ursinho</p>
                <Link to='/contato' className='btn'>
                    FAÇA SEU PEDIDO!
                </Link>                
            </div>

        </div>

    </div>
  )
}

export default PricingCard;