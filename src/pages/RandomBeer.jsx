import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

function RandomBeer() {
 
   const [randomBeer, setRandomBeer] = useState(null);
   const redirect = useNavigate()
 
    useEffect(()=>{
        getRandomBeer()
    }, [])

    const getRandomBeer = async ()=>{
        try{
            const response = await axios.get ("https://ih-beers-api2.herokuapp.com/beers/random" )
            console.log(response.data)
             setRandomBeer(response.data)
           
        }catch(err){redirect("/error")}
    }
    
    if (!randomBeer){
        return <h2>...is loading</h2>
      }
    
    return (
        
       
     <div key={randomBeer._id} >
        <div className="one-beer">
        <div><img src={randomBeer.image_url} alt={randomBeer.name} className="one-beer-img"/></div>
        <div>
          <h3>{randomBeer.name}</h3>
          <h4>{randomBeer.first_brewed}</h4>
        </div>
        <div  > 
          <h4>{randomBeer.tagline}</h4> 
          <h6>{randomBeer.attenuation_level}</h6>
        </div>
        <div>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
        </div>
  
      </div>
  )
}

export default RandomBeer