import React from "react";
import { Link } from "react-router-dom";

function Location ({location}) {
    return (
        <div className="SLocation">
        <Link to={`/locations/${location.id}`}>
            <h1>{location.name}</h1>
        </Link>
        <h2>{location.description}</h2>
        </div>
    );
};

export default Location;