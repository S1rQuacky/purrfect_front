import React from "react";
import Location from "./location";

function AllLocations(props) {
    const stay = props.getaways.map((location) => {
        return <Location className= "stay" location={location} key={location.id}/>
    })
    return (
    <div className="stays">
        {stay}
    </div>
    )
};

export default AllLocations;