import React from 'react';
import './stylesheets/cart.css';

function Cart(props){
    let items;
    /* if no ingredients in burger ARRAY display message - add ingredients */
    props.cartList.length === 0 ?
    items = <p>Burger Cart is empty :( </p>
    :
    items = props.cartList.map((x, index) => {
        return <div className="single-cart-item" key={index} id = {"cart-item-" + index} onClick={props.loadCartItem} > <span>Burger One : {index + 1}</span><p> Total Price : {props.cartList[index].totalPrice}</p></div>
    })
    return(
        <div className="cart-container">
            {items}
        <button onClick={props.closeCart}>Close Cart</button>
        </div>
    )
}

function testFun(e){
    console.log(e.currentTarget.id)
}

export default Cart;