import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Burger from './components/burger';
import Controls from './components/controls';
import Cart from './components/cart';

/* Array containing all slice prices and slice names
    i.e slice1 price = slicePrices[0].price = 5, 
    and so on */
const slicePrices = [{"name" : "slice1", "price" : 5 }, {"name" : "slice2", "price" : 10 } , {"name" : "slice3", "price" : 15 } , {"name" : "slice4", "price" : 20 }];

/* tracker keeps a track of which burger has been opened from cart for editing */
let tracker;
class App extends React.Component{
    /* state consists of number of each slice , total price and burger array (which contains the array/ sequence in which the slices are added), cart Array which contains burgers added to cart, show cart, edit cart  */
    state= {
        slice1 : 0,
        slice2 : 0,
        slice3 : 0,
        slice4 : 0,
        totalPrice : 0,
        burgerArray : [],
        cartArray : [],
        showCart : false,
        editMode : false
    }

    /* function trigegred when any slice is added to the burger */
    addSlice = (x) => {
        let str = "slice" + x;
            this.setState({
                [str] : this.state[str] + 1
            }, () => {
                /* update the total price once the state has been updated everywhere */
                this.updatePrice();
                /* update the ingredient array once the state has been updated everywhere */
                 this.updateIngredients(x)
            })
    }


    /* function triggered when any slice is removed from the burger */
    removeSlice = (x) => {
            let str = "slice" + x;
                if(this.state[str] !== 0){
                    this.setState({
                        [str] : this.state[str] - 1
                    }, () => {
                        /* update the total price once the state has been updated everywhere */
                        this.updatePrice();
                        /* removing the slice from ingredient array */
                        this.removeUpdateIngredients(x)
                    })
                }
    }

    /* function that updates the total price  */
    updatePrice = () => {
        this.setState({
            /* sum of number of each slice with it's respective slice price */
            totalPrice : this.state.slice1 * slicePrices[0].price + this.state.slice2 * slicePrices[1].price + this.state.slice3 * slicePrices[2].price + this.state.slice4 * slicePrices[3].price 
        })
    }

    /* function triggered when new ingredient is added to burger, this updates the burger ignredient array */
    updateIngredients = (x) => {
        this.setState({
            /* appending the slice to burger array
            here 1 - slice1
                 2 - slice2
                 3 - slice3
                 4 - slice4 */
            burgerArray :   [...this.state.burgerArray , x]
        })
    }

    /* function triggered when any ingredient is removed from the burger  */
    removeUpdateIngredients = (toRemove) => {

        /* copy the burger array to x */
        let x = this.state.burgerArray;

        /* reverse the array */
        x.reverse();

        /* find index of item to remove from array */
        let y = x.indexOf(toRemove);

        /* remove the respective item from array */
        x.splice(y,1);

        /* again reverse the array to get the original sequence back */
        x.reverse();

        /* update the burger array state */
        this.setState({
            burgerArray : x
        })
    }
    
    /* function that resets major state back to default */
    resetState = () => {
        this.setState({
            slice1 : 0,
            slice2 : 0,
            slice3 : 0,
            slice4 : 0,
            totalPrice : 0,
            burgerArray : []
        })
    }

    /* function that adds the burger to cart, stores all the state information for current burger in cart Array state */
    addToCart = () =>{
        if(this.state.totalPrice === 0){
            alert("Cannot add empty burger to cart");
        }
        else{
            let itemObject = {
                slice1 : this.state.slice1,
                slice2 : this.state.slice2,
                slice3 : this.state.slice3,
                slice4 : this.state.slice4,
                totalPrice : this.state.totalPrice,
                burgerArray : this.state.burgerArray
            }
            /* update cart array state */
            this.setState({
                cartArray : [...this.state.cartArray , itemObject]
            }, () => { /* callback, once state has been updated, reset all state values or reset burger */
                this.resetState();
                alert("Added to cart")
            })

        }
    }

    /* function repsonsible for showing the cart on click */
    openCart = () => {
        this.setState({
            showCart : true
        })
    }

    /* function that deletes a selected burger from cart */
    deleteItem = (e) => {
        let identifier = e.currentTarget.parentNode.id;
        identifier = identifier.substring(10, identifier.length);
        let x = this.state.cartArray
        x.splice(identifier,1)
        this.setState({
            cartArray : x
        }, () =>{
            this.resetState();
            this.setState({
                editMode: false
            })
        })
    }

    /* function repsonsible for loading a pre created burger from cart for editing */
    loadCartItem = (e) => {
        let identifier = e.currentTarget.parentNode.id;
        identifier = identifier.substring(10, identifier.length);
        this.setState({
            slice1 : this.state.cartArray[identifier].slice1,
            slice2 : this.state.cartArray[identifier].slice2,
            slice3 : this.state.cartArray[identifier].slice3,
            slice4 : this.state.cartArray[identifier].slice4,
            totalPrice : this.state.cartArray[identifier].totalPrice,
            burgerArray : this.state.cartArray[identifier].burgerArray,
            showCart : false,
            editMode : true
        }, () =>{
            tracker = identifier;
        })
    }

    /* saving chaanges made to burger to cart */
    saveChanges = () =>{
        /* if after editing burger price has been made zero, alert user  */
        if(this.state.totalPrice === 0){
            alert("Cannot add empty burger to cart");
        }
        else{
            let itemObject = {
                slice1 : this.state.slice1,
                slice2 : this.state.slice2,
                slice3 : this.state.slice3,
                slice4 : this.state.slice4,
                totalPrice : this.state.totalPrice,
                burgerArray : this.state.burgerArray
            }
            let x = this.state.cartArray
            x[tracker] = itemObject
            this.setState({
                cartArray : x,
                editMode : false /* close editing mode */
            }, () => { /* callback, once state has been updated, reset all state values to reset burger */
                this.resetState();
                alert("Changes Saved")
            })
        }
    }

    /* function triggered if the user dont want to save changes made */
    cancelChanges = () => {
        this.resetState();
        this.setState({
            editMode : false
        })
    }

    /* closing the cart tray */
    closeCart = () => {
        this.setState({
            showCart : false
        })
    }
    render(){
        /* array that contains number of each slice */
        const slices = [ this.state.slice1, this.state.slice2, this.state.slice3, this.state.slice4 ];
        return(
            <div className="main-wrapper">
            {/* if edit mode is opened this conndtion will load save changes and cancel buttons else it will load add to cart button */}
            {this.state.editMode === false ?
                <button onClick={this.addToCart} >Add to cart</button>
                :
                <div>
                    <button onClick={this.saveChanges} >Save Changes</button>
                    <button onClick={this.cancelChanges} >Cancel</button>
                </div>

            }
            <button onClick={this.openCart} className="open-cart"> Cart ( {this.state.cartArray.length} ) </button>
                <Burger ingredientsArray = {this.state.burgerArray}  />
                <Controls addSlice = {this.addSlice} 
                          removeSlice = {this.removeSlice} 
                          slices = {slices} 
                          slicePrices = {slicePrices} 
                          totalPrice = {this.state.totalPrice} />
                { this.state.showCart &&
                    <Cart cartList = {this.state.cartArray} closeCart = {this.closeCart} loadCartItem = {this.loadCartItem} deleteItem = {this.deleteItem}/>
                }
            </div>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
)