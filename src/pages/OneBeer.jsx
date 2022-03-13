import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import {useParams,useNavigate } from "react-router-dom"

function OneBeer() {
  //coger el id que proviene del param
  const {id} = useParams();

  const [singleBeer, setSingleBeer] = useState(null)

  const redirect = useNavigate ()
  
  // Puedo desestructurar el estado?

  useEffect(()=>{
    //actualizar el estado 
    getSingleBeer()
  }, [])
 
  //llamar a la Api con el params

  const getSingleBeer = async () =>{
    try{
      
      const response = await axios.get (`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      console.log (response.data)
      
      setSingleBeer(response.data)


    }catch (err){redirect("/error")}
    

  }

  if (!singleBeer){
    return <h2>...is loading</h2>
  }
 
 
  return (

    <div key={singleBeer._id} >
    <div className="one-beer">
      <div><img src={singleBeer.image_url} alt={singleBeer.name} className="one-beer-img"/></div>
      <div>
        <h3>{singleBeer.name}</h3>
        <h4>{singleBeer.first_brewed}</h4>
      </div>
      <div  > 
        <h4>{singleBeer.tagline}</h4> 
        <h6>{singleBeer.attenuation_level}</h6>
      </div>
      <div>
        <p>{singleBeer.description}</p>
        <p>{singleBeer.contributed_by}</p>
      </div>
      </div>

    </div>
  )
}

export default OneBeer