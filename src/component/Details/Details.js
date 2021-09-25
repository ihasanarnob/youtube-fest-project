import React from 'react';
import './Details.css'

const Details = (props) => {
    console.log(props)
    const {name,url,subscribers,netWorth,location,content} = props.info;
    return (
        <div className="container ">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div class="card h-100">
                    <img src= {url} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Channel: {name} </h5>
                    <p class="card-text"> Content Type : {content} </p>
                    <p class="card-text"> From : {location} </p>
                    <p class="card-text"> Subscribers : {subscribers} </p>
                    <p class="card-text"> Net Worth :  ${netWorth} Million </p>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>

            </div>
            
            
        </div>
    );
};

export default Details;