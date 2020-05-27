import React from 'react';
import './stylesheets/controls.css';
import SingleControl from './single-control';

function Controls(props){
    return(
        <div className="controls-container">
            {/* calling single control with specific props to get specific data to display  */}
            <SingleControl addSlice = {props.addSlice} value={1} removeSlice = {props.removeSlice} slice= {props.slices[0]} slicePrice = {props.slicePrices[0]}  />
            <SingleControl addSlice = {props.addSlice} value={2} removeSlice = {props.removeSlice} slice= {props.slices[1]} slicePrice = {props.slicePrices[1]}  />
            <SingleControl addSlice = {props.addSlice} value={3} removeSlice = {props.removeSlice} slice= {props.slices[2]} slicePrice = {props.slicePrices[2]}  />
            <SingleControl addSlice = {props.addSlice} value={4} removeSlice = {props.removeSlice} slice= {props.slices[3]} slicePrice = {props.slicePrices[3]}  />
            <div className = "total-price-container">
               <h2>Total Price : </h2>
               <h2> Rs {props.totalPrice}</h2>
           </div>
        </div>
    )
}

/* export component controls */
export default Controls;