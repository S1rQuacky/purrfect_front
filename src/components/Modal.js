import React from "react";
import ReactDom from 'react-dom';
import "./Modal.css";

function Modal ({open, onClose}){
    const url = "https://your-purrfect-getaway.herokuapp.com/locations/";
    const [formData, setFormData] = React.useState();

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    const addRecord = async (newRecord) => {
        const response = await fetch(url, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        setFormData()
        onClose()
    }

    const handleCancel = () => {
        setFormData()
        onClose()
    }
    const render = <div className="modalStyle">
        <div className="head">
            <button className="head" onClick={handleCancel}>X</button>
        </div>
        <h2>Add your location</h2>
        <h5>Fill in all the fields...</h5>
        <div className="form">
            <div className="inputForm"><label htmlFor="name">Name:</label><input onChange={handleChange} value={formData?.name} type="text" id="name" name="name" required /></div>
            <div className="inputForm"><label htmlFor="description">Description:</label><input onChange={handleChange} value={formData?.description} type="text" id="description" name="description" required /></div>
            <div className="inputForm"><label htmlFor="street">Street:</label><input onChange={handleChange} value={formData?.street} type="text" id="street" name="street" required />
                <label htmlFor="city">&nbsp;City:</label><input onChange={handleChange} value={formData?.city} type="text" id="city" name="City" required />
                <label htmlFor="state">&nbsp;State:</label><input onChange={handleChange} value={formData?.state} type="text" id="state" name="state" required />
                <label htmlFor="zipcode">&nbsp;Zip:</label><input onChange={handleChange} value={formData?.zipcode} type="text" id="zipcode" name="zipcode" required /></div>
            <div className="inputForm"><label htmlFor="email">eMail:</label><input onChange={handleChange} value={formData?.email} type="text" id="email" name="email" required />
            <label htmlFor="phone">&nbsp;Phone:</label><input onChange={handleChange} value={formData?.phone} type="text" id="phone" name="phone" required /></div>
            <div className="inputForm"><label htmlFor="photos">Photo URL:</label><input onChange={handleChange} value={formData?.photos} type="text" id="photos" name="photos" required /></div>
        </div>
        <div className="foot">
            <br></br>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={addRecord}>Submit</button>
        </div>
    </div>;

    const noRender = <></>
    return ReactDom.createPortal(<>{open ? render : noRender}</>,document.getElementById('portal'))
}

export default Modal