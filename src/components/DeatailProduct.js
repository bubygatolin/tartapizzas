import './WorkCardStyles.css';

import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';

import React from 'react'


const DetailProduct = () => {
  return (
    <div className='work-container'>
        <h1 className='product-heading'>Produtos</h1>
        <div className='product-container'>
            {WorkCardData.map((val, ind) => {
                return(
                   <>
                    <div>
                    <h1>{val.title}</h1>
                    <img style={{width:50, height:50}} src={val.imgsrc} alt='image' />
                    <p>
                    text={val.text}</p>
                    
                   
                    view={val.view} 
                    </div>
                   </>
                )
            })}
        </div>
            
        
    </div>
  )
}

export default DetailProduct;