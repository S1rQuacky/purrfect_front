import React from "react";
import AllLocations from "../components/AllLocations";

function Main(props) {

    return (
        <div>
        <AllLocations getaways= {props.allLocations}/>
        </div>
    )
};

export default Main