import React from 'react';
import Scene from './Top';
import './Card.css';
import Drone from './drone';
import Potion from './potion';
import Oldmac from './oldmac';


const CardComponent = () => {
    

  return (
    <>
    <div className='card-container'>
        <div className='card'>
        <strong className='bold'>+300</strong>
        <p className='content1'>We have successfully completed a total of 300+ projects 
         </p> 
         <div className='computer1'>
        <Scene/>
        </div>
         
        </div>
        
        <div className='card'>
        <strong className='bold'>100K</strong>
        <p className='content1'>We’ve gathered dozens of reviews from the clients and + 100k reviews
        </p>
        <div className='computer2'>
        <Drone/>
        </div>
        </div>
        <div className='card'>
        
        <strong className='bold'>+10</strong>
        <p className='content2'>Years of experience
        </p>
        <div className='computer3'>
        <Potion/>
        </div>
        
        </div>
        <div className='card'>
        <strong className='bold'>+40</strong>
        <p className='content2'>Team members all over the world
        
        </p> 
        <div className='computer3'>
        <Oldmac/>
        </div>
        
        </div>
      
        
    
    </div>
    </>
  );
};

export default CardComponent;