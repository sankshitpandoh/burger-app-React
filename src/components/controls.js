import React from 'react';
import './stylesheets/controls.css';
import SingleControl from './single-control';

function Controls(props){
    return(
        <div className="controls-container">
            <SingleControl addSlice = {props.addSlice1} removeSlice = {props.removeSlice1} slice= {props.slices[0]} slicePrice = {props.slicePrices[0]}  />
            <SingleControl addSlice = {props.addSlice2} removeSlice = {props.removeSlice2} slice= {props.slices[1]} slicePrice = {props.slicePrices[1]}  />
            <SingleControl addSlice = {props.addSlice3} removeSlice = {props.removeSlice3} slice= {props.slices[2]} slicePrice = {props.slicePrices[2]}  />
            <SingleControl addSlice = {props.addSlice4} removeSlice = {props.removeSlice4} slice= {props.slices[3]} slicePrice = {props.slicePrices[3]}  />
            <div className = "total-price-container">
               <h2>Total Price : </h2>
               <h2> Rs {props.totalPrice}</h2>
           </div>
        </div>
    )
}

export default Controls;