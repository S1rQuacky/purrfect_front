import React from "react";
import AllLocations from "../components/AllLocations";
import '../styles/main.scss'

function Main(props) {

    return (
        <div className="main"> 
        <AllLocations getaways= {props.allLocations}/>
        </div>
    )
};

export default Main