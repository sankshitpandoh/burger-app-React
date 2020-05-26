import React from 'react';
import './stylesheets/cart.css';

function Cart(props){
    let items;
    let sum = 0
    /* if no ingredients in burger ARRAY display message - add ingredients */
    props.cartList.length === 0 ?
    items = <p className = "empty-cart">Burger Cart is empty :( </p>
    :
    items = props.cartList.map((x, index) => {
        sum = sum + props.cartList[index].totalPrice
        return <div className="single-cart-item" key={index} >
            <div>
                <span>Burger : {index + 1}</span>
                <p> Total Price : {props.cartList[index].totalPrice}</p>
            </div>
            <div id = {"cart-item-" + index}>
                <button onClick={props.loadCartItem}>Edit</button>
                <button onClick={props.deleteItem}>Delete</button>
            </div>
            </div>
    })
    return(
        <div className="cart-container">
            {items}
            <button onClick={props.closeCart}>Close Cart</button>
            <div className = "total-cart-price" >
                <p>Total Cart Amount : {sum}</p>
            </div>
        </div>
    )
}


export default Cart;

/* To do
allow editing pre existing cart item instead of adding as new,
improve overall functionality, like cannot add existing burger when opened */