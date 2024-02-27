import './WorkCardStyles.css';

import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';

import React from 'react'


const Work = () => {
  return (
    <div className='work-container'>
        <h1 style={{color:'#e1dada'}} className='product-heading'>Nossas Pizzas</h1>
        <div className='product-container'>
            {WorkCardData.map((val, ind) => {
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view} 
                    price={val.price}
                    />
                )
            })}
        </div>
            
        
    </div>
  )
}

export default Work;