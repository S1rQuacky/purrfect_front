import React from "react";
import { Link } from "react-router-dom";
import Edit from "../components/Edit";


function ShowLocation({match, url}) {

    const [locs, setLocs] = React.useState()
    const [isOpen2, setIsOpen2] = React.useState(false);

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
        padding: '20px',
        width: "80%",
        margin: "30px auto",
    };

    React.useEffect(()=>{getLocations()},[match.params.id])

    const render = <div style={divi}>
                        <h1>{locs?.name}</h1>
                        <h2>{locs?.description}</h2>
                        <h3>{locs?.city}</h3>
                        <div className="show">
                            <img src={locs?.photos}></img>
                        </div>
                        <div className="foot">
                            <button onClick={()=> setIsOpen2(true)}>Edit</button>
                            <Edit open={isOpen2} onClose={()=> setIsOpen2(false)} loc={locs} />
                            <Link to="/">
                            <button onClick={deleteLocation}>Delete</button>
                            </Link>
                            <Link to="/">
                                <button>Home</button>
                            </Link>
                        </div>
                    </div>;

    const noRender = <></>;
    
    return (
        <div className="maybe" style={divi}>
            {locs ? render : noRender}
        </div>
    )
};

export default ShowLocation;