import React from 'react';
import './stylesheets/burger.css';

/* importing all slices from slices folder */
import Slice1 from './slices/slice1';
import Slice2 from './slices/slice2';
import Slice3 from './slices/slice3';
import Slice4 from './slices/slice4';

function Burger(props){
    let items;
    /* if no ingredients in burger ARRAY display message - add ingredients */
    props.ingredientsArray.length === 0 ?
    items = <p>Please start adding ingredients</p>
    :
    /* if length!=0 */
    items = props.ingredientsArray.map((x,index) => {
        return x === 1 ? /* if x === 1 i.e slice 1, if yes, append slice 1 to items list */
        <Slice1 key={index} />
        :   /* if not check if x === 2 i.e slice 1 if yes, append slice 2 to items list */
        x === 2 ?
            <Slice2 key={index} />
                : /* if not check, if x === 3 i.e slice 3 if yes, append slice 3 to items list */
                x === 3 ?
                    <Slice3 key={index} />
                        :   /* if not check, if x === 4 i.e slice 4 , if yes, append slice 4 to items list */
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
/* export the component Burger */
export default Burger;