import './NavbarStyles.css';

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from'../assets/logosf.png';


import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick =()=> setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >=100){
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);
  



  return (
    <div className={color ? '.header header-bg' : 'header'}>
         <a href="/" ><img className='logo-header'src={logo} /></a>
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            <li>
                <Link to={'/flores'}>Pizzas</Link>
            </li>

            <li>
                <Link to={'/presentes'}>Eventos</Link>
            </li>

            <li>
                <Link to={'/contato'}>Contato</Link>
            </li>
            
            
         </ul>

         <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{color: '#883943'}} />)
           : 
           (<FaBars size={20} style={{color: '#883943'}} />)}          
          
         </div>
   

    </div>

  )
}

export default Navbar