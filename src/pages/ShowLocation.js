import React from "react";
import { Link } from "react-router-dom";


function ShowLocation({oneLocation, match}) {
    const id = parseInt(match.params.id);
    console.log("nani", oneLocation)
    console.log("nani2", match.params)
    const seeLocation = oneLocation.find((getLocation) => {
        if (getLocation.id === id) {
            return getLocation
        }
    });
    console.log(seeLocation.name)
    /////////
    //styles
    /////////
    const div = {
        textAlign: "center",
        border: "3px solid blue",
        width: "80%",
        margin: "30px auto",
    };
    return (
        <div style={div}>
            <h1>{seeLocation.name}</h1>
            <h2>{seeLocation.description}</h2>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    )
};

export default ShowLocation;