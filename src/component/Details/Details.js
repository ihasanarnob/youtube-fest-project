import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Details.css'

const Details = (props) => {
    // console.log(props)
    const {name,url,subscribers,netWorth,location,content} = props.info;
    return (
        <div className="container m-3 card">

                    <div className="card h-100">
                    <img src= {url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title"> <FontAwesomeIcon icon={faUser} /> Channel: {name} </h5>
                    <p className="card-text"> Content Type : {content} </p>
                    <p className="card-text"> From : {location} </p>
                    <p className="card-text"> Subscribers : {subscribers} </p>
                    <p className="card-text"> Net Worth :  ${netWorth} Million </p>
                    </div>
                    <p className="card-text m-3"><button className="add-btn"
                        onClick = { ()=> props.handleAdd(props.info)}
                    >Add For Hire</button></p>
                    </div>           
        </div>
    );
};

export default Details;