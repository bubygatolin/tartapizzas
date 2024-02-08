import './FooterStyles.css'

import React from 'react';
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#e1dada', marginRight:'2rem'}}/>
                    <div>
                        <p>Vila Zelina - SP</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4 style={{color:'#e1dada'}}> <FaPhone size={20} style={{color:'#e1dada', marginRight:'2rem'}} />                    
                    (11) 98108-1390</h4>                 
                </div>
                <div className='email'>
                <a  href ="mailto:pizzastarta@gmail.com"><h4 style={{color:'#e1dada'}}> <FaMailBulk size={20} style={{color:'#e1dada', marginRight:'2rem'}} />                    
                pizzastarta@gmail.com</h4> </a>                
                </div>
            </div>

            <div className='right'>
                <h4 style={{color:'#e1dada'}}>Sobre nós</h4>
                <p style={{color:'#e1dada'}}>Trabalhamos com os melhores ingredientos do mercado, prezando pela qualidade e sabor.</p>
                <div className='social'>    
                <a href='/contato'> <FaMailBulk 
                size={40} 
                style={{color:'#e1dada', marginRight:'1rem'}}/></a>
                
                <a href='https://www.instagram.com/tarta.pizzas/'> <FaInstagram 
                size={40} 
                style={{color:'#e1dada', marginRight:'1rem'}}/></a>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer