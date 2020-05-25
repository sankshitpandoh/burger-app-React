import React from 'react';

function SingleControl(props){
    return(
        <div className="single-row">
            <button onClick={props.addSlice}>Slice1</button>
            <span>
             <p>{props.slice}</p>
             X 
             <p>{props.slicePrice}</p>
         </span>
         <span className = "price">{props.slice * props.slicePrice}</span>
    </div>
    )
}

export default SingleControl;