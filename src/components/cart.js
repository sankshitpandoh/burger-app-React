import React from 'react';
import './stylesheets/cart.css';

function Cart(props){
    let items;
    /* if no ingredients in burger ARRAY display message - add ingredients */
    props.cartList.length === 0 ?
    items = <p>Burger Cart is empty :(</p>
    :
    items = props.cartList.map((x, index) => {
        return <div key={index}><p>{props.cartList[index].totalPrice}</p></div>
    })
    return(
        <div className="cart-container">
            {items}
        </div>
    )
}

export default Cart;