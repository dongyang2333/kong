import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
 
  const[products,setProduct] = useState( [] );

    useEffect (()=> {
        const fetchData= async ()=>{
            const {data} =await axios.get("api/products");
            setProduct(data);
        }
        fetchData();
        return () => {

        };
    }, [])
  
  return(
    <ul>
    {
        products.map( product =>
    <li>
        
            
            
               {product.name}
               {product.category}
            
            
    </li>

)
    
    }
    
  
</ul>
  )
  }
export default App;
