import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    const totalReducer = (prev,current)=>prev + current.netWorth;
    const total = cart.reduce(totalReducer,0);
    return (
        <div className="head m-4">

       <h3 > <FontAwesomeIcon icon={faUsers} /> Youtubers  : {props.cart.length} </h3>

              <h5>Total: {total} Million $USD  </h5>

    

            
        </div>
    );
};

export default Cart;