import React from 'react';

function SingleControl(props){
    return(
        /* displaying data passed from control.js as props */
        <div className="single-row">
            <strong>{props.slicePrice.name}</strong>
            <span className="quantity" >
                <button onClick={props.addSlice}>+</button>
                <p>{props.slice}</p>
                <button onClick={props.removeSlice}>-</button>
            </span>
             <span>X</span>
             <p>{props.slicePrice.price}</p>
         <span className = "price">Rs {props.slice * props.slicePrice.price}</span>
    </div>
    )
}

/* export component Single Control */
export default SingleControl;