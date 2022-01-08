//Components
import Main from "./pages/main";
import Nav from "./components/nav";
import LocForm from "./components/LocationForm";
import ShowLocation from "./pages/locations";

//React and Hooks
import React, { useState, useEffect } from "react";

//Components of React Router
import { Route, Switch } from "react-router-dom";

function App(props) {

  //My API
  const url = "https://your-purrfect-getaway.herokuapp.com/locations/";

  //State to Hold list of locations
  const [locations, setLocations] = useState([]);

  //hold state for editing
  const [editLocation, setEditLocation] = useState()

  ////////////
  //Functions
  ////////////
//get my API list
const getLocations = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setLocations(data);
};
//create new location
const addLocation = async (newLocation) => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newLocation),
  });
  getLocations();
};
//edit locations
const getEditLocation = (loc) => {
  setEditLocation(loc);
  props.history.push("/edit");
};

const updateLocation = async (loc) => {
  const response = await fetch(url + loc.id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loc),
  });
  getLocations()
};
//delete 
const deleteLocation = async (loc) => {
  const response = await fetch(url + loc.id + "/", {
    method: "delete",
  });
  getLocations();
  props.history.push("/");
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
      <h1><Nav /></h1>
      <Switch>
        <Route exact path="/" render={(routerProps) => <Main {...routerProps} allLocations={locations}/>} />
        <Route path="/locations/:id" render={(routerProps) => (
          <ShowLocation {...routerProps} oneLocation={locations} getLoc={getLocations} url={url}/>)}/>
        <Route path="/new" render={(routerProps) => <LocForm {...routerProps}/>}/>
        <Route path="/edit" render={(routerProps) => <LocForm {...routerProps}/>}/>
      </Switch>   
      
    </div>
  );
}

export default App;
