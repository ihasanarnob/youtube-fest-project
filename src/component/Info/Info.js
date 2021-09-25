import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import './Info.css';

const Info = () => {
    const [infos,setInfos]= useState([]);
    useEffect( ()=>{
        fetch('./info.json')
        .then(res => res.json())
        .then(data => setInfos(data))
    } ,[])
    return (
        <div className="container">
            {
               infos.map(info => <Details
               info = {info}
               ></Details> ) 
            }
            
        </div>
    );
};

export default Info;