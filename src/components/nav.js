import React from "react";
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import Modal from "./Modal";


function Nav(props) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header>
            <nav className="navbar">
                <div className="logo1"><Link to="/"> Purrfect </Link></div>
                <div className="logo2"><Link to="/"> &nbsp; Getaway </Link></div>
                
            </nav>
            <div className="addBtn">
                    <button onClick={()=> setIsOpen(true)}>Add your location</button>
                    <Modal open={isOpen} onClose={()=> setIsOpen(false)} />
                </div>
        </header>
    )
};

export default Nav;