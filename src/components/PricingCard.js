import './PricingCardStyles.css';

import React from 'react'
import { Link } from 'react-router-dom';

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>Pizzas Recheadas</h3>
                <span className='bar'></span>
                <p className='btc'> À partir de  <br />R$ 19,90 </p>
                <p>Mussarela</p>
                <p>Calabreza</p>
                <p>Diersos Sabores</p>
                <Link to='https://wa.me/5511981081390/' className='btn'>
                    FAÇA SEU PEDIDO!
                </Link>                
            </div>
            <div className='card'>
                <h3>Massa Pronta</h3>
                <span className='bar'></span>
                <p className='btc'> À partir de  <br />R$ 14,90 </p>
                <p>Massa pré-assada</p>
                <p>Recheie em casa</p>
                <p>Massa integral e Crostini</p>
                <Link to='https://wa.me/5511981081390/' className='btn'>
                    FAÇA SEU PEDIDO!
                </Link>                
            </div>
            <div className='card'>
                <h3>Kits 3 produtos</h3>
                <span className='bar'></span>
                <p className='btc'> À partir de <br />R$ 44,90 </p>
                <p>Monte seu Kit</p>
                <p>Massas, Molho</p>
                <p>pizza recheada e Crostini</p>
                <Link to='https://wa.me/5511981081390/' className='btn'>
                    FAÇA SEU PEDIDO!
                </Link>                
            </div>

        </div>

    </div>
  )
}

export default PricingCard;