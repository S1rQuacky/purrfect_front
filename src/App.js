//Components
import Main from "./components/main";
import Nav from "./components/nav";
import AllLocations from "./pages/AllLocations";
import LocForm from "./pages/LocationForm";
import ShowLocation from "./pages/ShowLocation";

//React and Hooks
import React, { useState, useEffect } from "react";

//Components of React Router
import { Route, Switch } from "react-router-dom";

function App(props) {

  //My API
  const url = "https://your-purrfect-getaway.herokuapp.com/locations/";

  //State to Hold list of locations
  const [location, setLocation] = useState([]);

  ////////////
  //Functions
  ////////////

  ////////////
  //useEffects
  ////////////

  /////////////
  //Returned JSX
  /////////////
  return (
    <div>
      <h1>Your Purrfect Getaway</h1>
      <Switch>
        
      </Switch>
      
    </div>
  );
}

export default App;
