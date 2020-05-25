import React from 'react';
import './stylesheets/controls.css';

function Controls(props){
    return(
        <div className="controls-container">
           <div className="single-row">
               <button onClick={props.addSlice1}>Slice1</button>
               <span>
                    <p>{props.slices[0]}</p>
                    X 
                    <p>{props.slicePrices[0]}</p>
                </span>
                <span className = "price">{props.slices[0] * props.slicePrices[0]}</span>
           </div>
           <div className="single-row">
               <button onClick={props.addSlice2}>Slice2</button>
               <span>
                    <p>{props.slices[1]}</p>
                    X 
                    <p>{props.slicePrices[1]}</p>
                </span>
                <span className = "price">{props.slices[1] * props.slicePrices[1]}</span>
           </div>
           <div className="single-row">
               <button onClick={props.addSlice3}>Slice3</button>
               <span>
                    <p>{props.slices[2]}</p>
                    X 
                    <p>{props.slicePrices[2]}</p>
                </span>
                <span className = "price">{props.slices[2] * props.slicePrices[2]}</span>
           </div>
           <div className="single-row">
               <button onClick={props.addSlice4}>Slice4</button>
               <span>
                    <p>{props.slices[3]}</p>
                    X 
                    <p>{props.slicePrices[3]}</p>
                </span>
                <span className = "price">{props.slices[3] * props.slicePrices[3]}</span>
           </div>
           <div className = "total-price-container">
               <h2>Total Price : </h2>
               <h2> Rs {props.totalPrice}</h2>
           </div>
        </div>
    )
}

export default Controls;