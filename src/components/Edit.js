import React from "react";
import ReactDom from 'react-dom';
import "./Modal.css";

function Edit ({open, onClose, loc}){
    const url = "https://your-purrfect-getaway.herokuapp.com/locations/";
    const [formData2, setFormData2] = React.useState();

    console.log(loc)

    // handles
    const handleChange2 = (event) => {
        setFormData2({ ...formData2, [event.target.name]: event.target.value });
    };
    
    const editRecord = async () => {
        const response = await fetch(url + formData2.id, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData2),
        });
        console.log('submitted',formData2)
        onClose()
    }

    const handleCancel = () => {
        onClose()
    }
    const handleLoad = () => {
        setFormData2(loc)
    }

    // What to load
    const render = <div className="modalStyle">
        <div className="head">
            <button className="head" onClick={handleCancel}>X</button>
        </div>
        <h2>Add your location</h2>
        <h5>Fill in all the fields...</h5>
        <div className="form">
            <div className="inputForm"><label htmlFor="name">Name:</label><input onChange={handleChange2} value={formData2?.name} type="text" id="name" name="name" required /></div>
            <div className="inputForm"><label htmlFor="description">Description:</label><input onChange={handleChange2} value={formData2?.description} type="text" id="description" name="description" required /></div>
            <div className="inputForm"><label htmlFor="street">Street:</label><input onChange={handleChange2} value={formData2?.street} type="text" id="street" name="street" required />
                <label htmlFor="city">&nbsp;City:</label><input onChange={handleChange2} value={formData2?.city} type="text" id="city" name="City" required />
                <label htmlFor="state">&nbsp;State:</label><input onChange={handleChange2} value={formData2?.state} type="text" id="state" name="state" required />
                <label htmlFor="zipcode">&nbsp;Zip:</label><input onChange={handleChange2} value={formData2?.zipcode} type="text" id="zipcode" name="zipcode" required /></div>
            <div className="inputForm"><label htmlFor="email">eMail:</label><input onChange={handleChange2} value={formData2?.email} type="text" id="email" name="email" required />
            <label htmlFor="phone">&nbsp;Phone:</label><input onChange={handleChange2} value={formData2?.phone} type="text" id="phone" name="phone" required /></div>
            <div className="inputForm"><label htmlFor="photos">Photo URL:</label><input onChange={handleChange2} value={formData2?.photos} type="text" id="photos" name="photos" required /></div>
        </div>
        <div className="foot">
            <br></br>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={editRecord}>Submit</button>
        </div>
    </div>;

    const noRender = <></>

    React.useEffect(()=> handleLoad(),[])
    return ReactDom.createPortal(<>{open ? render : noRender}</>,document.getElementById('portal'))
}

export default Edit

