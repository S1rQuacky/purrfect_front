import React from "react";
import { Link } from "react-router-dom";
import '../styles/main.scss'

function Location ({location}) {
    return (
        <div className="SLocation">
        <Link to={`/locations/${location.id}`}>
            <h1>{location.name}</h1>
        </Link>
        <h2>{location.description}</h2>
        <img src={location.photos}></img>
        </div>
    );
};

export default Location;