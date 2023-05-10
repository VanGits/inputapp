import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Main.css"

const Main = () => {
    return (
        <div className="mainWrapper">
        <div className='Main'>
            <h1>Forms</h1>
            <Link to="/caregiver-forms/0">
                <button>Caregiver Forms</button>
            </Link>
            <Link to="/client-forms/0">
                <button>Client Forms</button>
            </Link>
            
        </div>
        </div>
    );
}

export default Main;
