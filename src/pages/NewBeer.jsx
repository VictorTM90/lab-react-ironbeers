import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const redirect = useNavigate();

  //Estados:

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrew, setFirstBrew] = useState("");
  const [tipsBrew, setTipsBrew] = useState("");
  const [atenuation, setAtenuation] = useState(0);
  const [contribution, setContribution] = useState("");

  //Actualizar el formulario con la función handleSubmit

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const newBeer = {
        name,
        tagline,
        description,
        firstBrew,
        tipsBrew,
        atenuation,
        contribution,
      };
      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
    } catch (err) {
      redirect("/error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="form">
          <div className="inForm">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inForm">
            <label>Tagline</label>
            <input
              type="tagline"
              name="name"
              onChange={(e) => setTagline(e.target.value)}
            />
          </div>
          <div className="inForm">
            <label>Description</label>
            <textarea
              type="text"
              name="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="inForm">
            <label>First brewed</label>
            <input
              type="text"
              name="first_brewed"
              onChange={(e) => setFirstBrew(e.target.value)}
            />
          </div>
          <div className="inForm">
            <label>Brewers tips</label>
            <input
              type="text"
              name="brewers_tips"
              onChange={(e) => setTipsBrew(e.target.value)}
            />
          </div>
          <div className="inForm">
            <label>attenuation level</label>
            <input
              type="number"
              name="attenuation_level"
              onChange={(e) => setAtenuation(e.target.value)}
            />
          </div>
          <div className="inForm">
            <label>Contributed by: </label>
            <input
              type="text"
              name="contributed_by"
              onChange={(e) => setContribution(e.target.value)}
            />
          </div>
          <div id="btn-new-beer"> 
          <button > Add new Beer</button>

          </div>
        </div>
      </form>
    </div>
  );
}

export default NewBeer;
