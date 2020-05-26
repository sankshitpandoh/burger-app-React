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
// let cartArray = [];
class App extends React.Component{
    /* state consists of number of each slice , total price and burger array (which contains the array/ sequence in which the slices are added) */
    state= {
        slice1 : 0,
        slice2 : 0,
        slice3 : 0,
        slice4 : 0,
        totalPrice : 0,
        burgerArray : [],
        cartArray : [],
        showCart : false
    }

    /* function trigegred when slice1 is added to the burger */
    addSlice1 = () => {
        this.setState({
            slice1 : this.state.slice1 + 1
        }, () => {
            /* update the total price once the state has been updated everywhere */
            this.updatePrice();
            /* update the ingredient array once the state has been updated everywhere */
             this.updateIngredients(1)
        } )
    }

    /* function trigegred when slice2 is added to the burger */
    addSlice2 = () => {
        this.setState({
            slice2 : this.state.slice2 + 1
        } ,() => {
            this.updatePrice();
             this.updateIngredients(2)
        } )
    }

    /* function trigegred when slice3 is added to the burger */
    addSlice3 = () => {
        this.setState({
            slice3 : this.state.slice3 + 1
        } ,() => {
            this.updatePrice();
             this.updateIngredients(3)
        } )
    }

    /* function trigegred when slice4 is added to the burger */
    addSlice4 = () => {
        this.setState({
            slice4 : this.state.slice4 + 1
        } ,() => {
            this.updatePrice();
             this.updateIngredients(4)
        } )
    }

    /* function triggered when slice1 is removed from the burger */
    removeSlice1 = () => {
        if(this.state.slice1 === 0){
        }
        else{
            this.setState({
                slice1 : this.state.slice1 - 1
            },() => {
                /* update the total price once the state has been updated everywhere */
                this.updatePrice();
                /* removing the slice from ingredient array */
                this.removeUpdateIngredients(1)
            })
        }
    }

    /* function triggered when slice2 is removed from the burger */
    removeSlice2 = () => {
        if(this.state.slice2 === 0){

        }
        else{
            this.setState({
                slice2 : this.state.slice2 - 1
            },() => {
                this.updatePrice();
                this.removeUpdateIngredients(2)
            })
        }
    }

    /* function triggered when slice3 is removed from the burger */
    removeSlice3 = () => {
        if(this.state.slice3 === 0){

        }
        else{
            this.setState({
                slice3 : this.state.slice3 - 1
            },() => {
                this.updatePrice();
                this.removeUpdateIngredients(3)
            })
        }
    }

    /* function triggered when slice4 is removed from the burger */
    removeSlice4 = () => {
        if(this.state.slice4 === 0){
            
        }
        else{
            this.setState({
                slice4 : this.state.slice4 - 1
            },() => {
                this.updatePrice();
                this.removeUpdateIngredients(4)
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
    
    /* function that resets the state back to default */
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
        })
    }

    /* function repsonsible for getting selected id from burger and sending it to loadBurger function to load the burger */
    loadCartItem = (e) => {
        let identifier = e.currentTarget.parentNode.id;
        identifier = identifier.substring(10, identifier.length);
        this.loadBurger(identifier)
    }

    loadBurger = (identifier) => {
        this.setState({
            slice1 : this.state.cartArray[identifier].slice1,
            slice2 : this.state.cartArray[identifier].slice2,
            slice3 : this.state.cartArray[identifier].slice3,
            slice4 : this.state.cartArray[identifier].slice4,
            totalPrice : this.state.cartArray[identifier].totalPrice,
            burgerArray : this.state.cartArray[identifier].burgerArray,
            showCart : false
        })
    }

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
            <button onClick={this.addToCart} >Add to cart</button>
            <button onClick={this.openCart} className="open-cart"> Cart ( {this.state.cartArray.length} ) </button>
                <Burger ingredientsArray = {this.state.burgerArray}  />
                <Controls addSlice1 = {this.addSlice1} removeSlice1 = {this.removeSlice1} 
                          addSlice2 = {this.addSlice2} removeSlice2 = {this.removeSlice2}
                          addSlice3 = {this.addSlice3} removeSlice3 = {this.removeSlice3} 
                          addSlice4 = {this.addSlice4} removeSlice4 = {this.removeSlice4} 
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