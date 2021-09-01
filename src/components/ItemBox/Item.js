import React from 'react';
import Logo from '../../assets/logo-city.png';
import "./Item.css";


const Item = () => {
    return (
        <div className="container">
            <div className="card">
                <img src={Logo} className="card-img-top" alt="city logo" />
                <div className="card-body">
                    <p className="card-text">Warszawa</p>
                    <p className="card-text">Poland</p>
                    <p className="card-text">Temperature: <span className="current-temp">24°C</span>
                    </p>
                    <button className="btn btn-lg btn-danger">SEE MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Item;