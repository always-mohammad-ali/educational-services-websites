// import React, { useEffect, useState } from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import UseServices from '../UseServices/UseServices';



const Home = () => {
        const [subTopics, setSubTopics] = useState([]);
        useEffect( () => {
            fetch('./subTopic.JSON')
            .then(res => res.json())
            .then(data => setSubTopics(data))
        },[])

// useServices
const [services, setServices] = UseServices();
        
    

    return (
        <div>
          {/* header Part */}
          <div className='bg-container'>
              
              <Header></Header>
              <div className='text-center mt-5 quote'>
              <h2 className="me-5">" An Investment in </h2>
              <h2 className="ms-5">Knowledge pays</h2>
              <h2 className="me-5">the best interest "</h2>
              <h1 className='quoter'>Benjamin Franklin</h1>
              </div>
              
                
              
              
          </div>
          

          {/* subject topics start */}
          <h2 className='container mt-4 mb-3 '>Science Topics</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4 container ms-5">
                {
                subTopics.map(subTopic =>                             
                    <div className="col" >
                        <div className="card w-75 ms-4 border border-1 border-dark rounded ">
                            <img src={subTopic.img} class="card-img-top" alt="..."/>
                            <div class="card-body">                        
                            <p>{subTopic.explanation}</p>
                            </div>
                        </div>
                    </div>           
                )
                
                }               
            </div>
            <hr className='border-bottom border-3 border-danger'></hr>
           {/* subject topics end */}
            
           {/* total 4 Services start  */}
           <h1 className='container mt-5 mb-3 '>Our Services</h1>
           <div class="row row-cols-1 row-cols-md-2 g-4 container ms-5">
                {
                    services.map(service =>
                        <div className="col" >
                            <div className="card w-75 ms-4 border border-1 border-primary rounded ">
                                <img src={service.img} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h4>Course Name: {service.title}</h4>
                                <h5>Course Fee: {service.price}$</h5>                        
                                <p>{service.details}</p>
                                </div>
                            </div>
                        </div>
                        )
                }
           </div>
           {/* t0tal 4 services end */}
        </div>
    );
    
};
<Footer></Footer>

export default Home;