//Components
import Main from "./pages/main";
import Nav from "./components/nav";
import LocForm from "./components/LocationForm";
import ShowLocation from "./pages/ShowLocation";

//React and Hooks
import React, { useState, useEffect } from "react";

//Components of React Router
import { Route, Switch } from "react-router-dom";

function App(props) {

  //My API
  const url = "https://your-purrfect-getaway.herokuapp.com/locations/";

  //State to Hold list of locations
  const [locations, setLocations] = useState([]);

  ////////////
  //Functions
  ////////////
//get my API list
const getLocations = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setLocations(data);
};


  ////////////
  //useEffects
  ////////////
//useEffect to get list of locations when page loads. 
useEffect(() => {getLocations()}, []);
  /////////////
  //Returned JSX
  /////////////
  return (
    <div>
      <h1>Your Purrfect Getaway</h1>
      <Switch>
        <Route exact path="/" render={(routerProps) => <Main {...routerProps} allLocations={locations}/>} />
        <Route path="/locations/:id" render={(routerProps) => (
          <ShowLocation {...routerProps} oneLocation={locations} getLoc={getLocations} />)}/>
        {/* <Route path="/new" render={(routerProps) => <LocForm {...routerProps}/>}/>
        <Route path="/edit" render={(routerProps) => <LocForm {...routerProps}/>}/> */}
      </Switch>      
    </div>
  );
}

export default App;
