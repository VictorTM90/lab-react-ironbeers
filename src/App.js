import './App.css';
import {Routes, Route} from "react-router-dom"

import Navbar from './components/Navbar';
import ListBeers from './pages/ListBeers';
import OneBeer from './pages/OneBeer';
import NewBeer from './pages/NewBeer';
import Home from './pages/Home';
import RandomBeer from './pages/RandomBeer';

function App() {

  return (
    <div className="App">
    <Navbar />
    <div>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/beers" element={<ListBeers/>}/>
        <Route path ="/beers/:id" element={<OneBeer />} />
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>

      </Routes>
    </div>

    </div>
  
  );
}

export default App;
