import './WorkCardStyles.css';

import React from 'react'
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
  return (
    <div className='product-card'>
                <a href='https://www.instagram.com/tarta.pizzas/'>
                  <img src={props.imgsrc} alt='image' />
                </a>
                
                <h2 className='product-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>
                </div>
                <div className='pro-btns'>
                    <NavLink to={props.view} className ='btn'>
                        Peça Já!
                    </NavLink>
                    <NavLink to={'https://www.instagram.com/tarta.pizzas/'} className ='btn'>
                    {props.price}
                    </NavLink>
                </div>
            </div>
  )
}

export default WorkCard;