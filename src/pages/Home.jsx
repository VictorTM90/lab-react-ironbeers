import React from "react";
import { Link } from "react-router-dom";

import ListBeers from "../assets/beers.png";
import RandomBeer from "../assets/random-beer.png";
import NewBeer from "../assets/new-beer.png";

function Home() {
  return (
    <div className="home">
    <div className="container">
      <div>
        <Link to="/beers">
          <div className="cap-container"><h3>All Beers</h3>
          <img src={ListBeers} alt="beers" /></div>
          
        </Link>
      </div>
      <div >
        <Link to="/random-beer"> 
        <div className="cap-container"><h3>Random Beer</h3>
          <img src={RandomBeer} alt="random-beers" /></div>
          
        </Link>
      </div>
      <div>
        <Link to="/new-beer">
          <div className="cap-container"><h3>New Beer</h3>
          <img src={NewBeer} alt="random-beers" /></div>
          
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Home;
