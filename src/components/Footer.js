import './FooterStyles.css'

import React from 'react';
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#883943', marginRight:'2rem'}}/>
                    <div>
                        <p>São Paulo, SP · Itaim, SP · Moema, SP · Campo Belo, SP</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4> <FaPhone size={20} style={{color:'#883943', marginRight:'2rem'}} />                    
                    (11) 96081-4261</h4>                 
                </div>
                <div className='email'>
                <a href="mailto:lebrufestas@hotmail.com"><h4> <FaMailBulk size={20} style={{color:'#883943', marginRight:'2rem'}} />                    
                    lebrufestas@hotmail.com</h4> </a>                
                </div>
            </div>

            <div className='right'>
                <h4>Sobre nós</h4>
                <p>Decoração de festas... Aniversários, batizados, chá de bebe, chá bar, casamentos, jantares.
                Trabalhamos desde a montagem da mesa principal até assessoria em seu evento. Temos parceria com serviços de alimentação e divertimentos para completar seu evento!</p>
                <div className='social'>    
                <a href='https://www.facebook.com/lebrudecoracaofina/'> <FaFacebook 
                size={40} 
                style={{color:'#883943', marginRight:'1rem'}}/></a>
                
                <a href='https://www.instagram.com/lebrudecoracaofina/'> <FaInstagram 
                size={40} 
                style={{color:'#883943', marginRight:'1rem'}}/></a>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer