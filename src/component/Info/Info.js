import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Details from '../Details/Details';
import './Info.css';

const Info = () => {
    const [infos,setInfos]= useState([]);
    const [cart,setCart]= useState([]);

    useEffect( ()=>{
        fetch('./info.json')
        .then(res => res.json())
        .then(data => setInfos(data))
    } ,[])
    const handleAdd = tuber => {
        const newCart = [...cart,tuber];
        setCart(newCart);
    }
    return (
         <div className="body-container">
             {/* information of card data */}
            <div className="info-container">
             {
                infos.map(info => <Details
                key = {info.id}
                info = {info}
                handleAdd = {handleAdd}
                ></Details> ) 
             }           
            </div>
            {/* information of calculation part */}
            <div className=" cart-container">
             <Cart 
             cart = {cart}
             ></Cart>
            </div>

        </div>
    );
};

export default Info;