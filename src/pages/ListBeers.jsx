import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import {Link,useNavigate } from "react-router-dom"

function ListBeers() {
  // actualizar el estado con la llamada, de primeras no conocemos la data por tanto (null)
  const [allbeers, setAllbeers] = useState(null); 
  
  //redireccionar con navigate 
  const redirect = useNavigate()
 
  // esperar que resuelva la llamada para actualizar el estado 



  // llamar a la API cuando se crea el componente
  useEffect(()=>{
    //ejecutar la función de llamada de api
    getAllBeers()
  },[])

  //funcio para resolver la promesa de llamada
  const getAllBeers = async () => {

      try{
    
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
        

        //acutalizar el estado con la data
        setAllbeers(response.data)
        }
        catch(err){
          redirect("/error")
        }

  };

  if (!allbeers){
    return <h2>...is loading</h2>
  }

  return (
    <div>
       
       { allbeers.map((eachbeer)=>{
          return (
            <div key={eachbeer._id} >
            <Link to={`/beers/${eachbeer._id}`} id="beer">
              <div className='beer-img-container'> <img  src={eachbeer.image_url} alt={eachbeer.name}/></div>
              <div className='beer-text-container'>
                <h3>{eachbeer.name}</h3>
                <h4>{eachbeer.tagline}</h4>
                <h6>{eachbeer.contributed_by}</h6>
               </div>
              </Link>
          
             
         
            </div>
             
          )
         })
       }



    </div>
  )
}

export default ListBeers