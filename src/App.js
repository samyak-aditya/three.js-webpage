import logo from './logo.svg';
import './App.css';
import CardComponent from './Card';
import card from './constants';
import Scene from './Top';
function App() {
  return (
    <div className="App">
      
      <div className="heading">
    <h1>We Strive to Innovate</h1>
    <div className="line"></div>
    
    
    
    <div className='card-container'>
    <div className="changing font1">
    <strong>Solid Strategy </strong> aligned with business needs and robust data analysis are 
    fundamental ingredients to extract actionable insights 
    </div>
    

    <div className="changing font3">
    Some Number About Us
    
    </div>
    <CardComponent className="card" cards={card} />
    </div>
    <div className="circles">
    <span class="circle1">
    <span class="circle2">
      <div className='textup'>
    <span class="circle2 pulse dot3">Growth</span>
    </div>
    
    <span class="circle3"> <span class="Bdot">
           </span>
      <div className='textup'>
    <span class="circle3 pulse dot2">insights</span>
    </div>
    <span class="circle4">
      <div className='textup'>
    <span class="circle4 pulse dot">Product
    <div>
      <span class="Bdot">
           </span>
           <span class="Bdot1">
           </span>
           <span class="Bdot2">
           </span>
           
  
      </div>
      
    </span></div>
    </span>
    </span>
    </span>
    </span>

    </div>
    
    </div>
    
    


<span class="dot"></span>
    </div>
  );
}


export default App;
