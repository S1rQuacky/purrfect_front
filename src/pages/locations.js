import React from "react";
import { Link } from "react-router-dom";


function ShowLocation({match, url}) {

    const [locs, setLocs] = React.useState()

    const getLocations = async () => {
        const response = await fetch(url);
        const data = await response.json();
        const id = parseInt(match.params.id);
        setLocs(data.find(element => element.id === id))
    };

    //delete
    const deleteLocation = async (loc) => {
        const response = await fetch(url + match.params.id + "/", {
          method: "delete",
        });
        // getLocations();
        // props.history.push("/");
      };
    /////////
    //styles
    /////////
    const divi = {
        textAlign: "center",
        border: "3px solid blue",
        width: "80%",
        margin: "30px auto",
    };

    React.useEffect(()=>{getLocations()},[match.params.id])

    const render = <div style={divi}>
                    <h1>{locs?.name}</h1>
                    <h2>{locs?.description}</h2>
                    <Link to="/">
                    <button onClick={deleteLocation}>Delete</button>
                    </Link>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                    </div>;

    const noRender = <></>;
    
    return (
        <div className="maybe" style={divi}>
            {locs ? render : noRender}
        </div>
    )
};

export default ShowLocation;