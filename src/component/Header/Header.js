import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';


import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header">
                <h2> World YouTube Fan Fest</h2>
                <p>Watch PewDiePie, MrBreast, Cary Minati, BlackPink , and more as they take the stage to close out  <FontAwesomeIcon icon={faHashtag} />YTFF with a bang!</p>
                <h3>Total Budget : 200 Million USD($)</h3>
            </div>
        </div>
    );
};

export default Header;