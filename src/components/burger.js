import React from 'react';
import './stylesheets/burger.css';
import Slice1 from './slices/slice1';
import Slice2 from './slices/slice2';
import Slice3 from './slices/slice3';
import Slice4 from './slices/slice4';

function Burger(props){
    let items;
    props.ingredientsArray.length === 0 ?
    items = <p>Please start adding ingredients</p>
    :
    items = props.ingredientsArray.map((x,index) => {
        return x === 1 ? 
        <Slice1 key={index} />
        :
        x === 2 ?
            <Slice2 key={index} />
                :
                x === 3 ?
                    <Slice3 key={index} />
                        :
                        x === 4 &&
                            <Slice4 key={index} />
    })
    return(
        <div className="burger-container">
            <div className = "burger-bun">
                {items}
            </div>
        </div>
    )
}

export default Burger;