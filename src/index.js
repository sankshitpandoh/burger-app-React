import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Burger from './components/burger';
import Controls from './components/controls';

/* Array containing all slice prices
    i.e slice1 price = slicePrices[0] = 5 
    and so on */
const slicePrices = [{"name" : "slice1", "price" : 5 }, {"name" : "slice2", "price" : 10 } , {"name" : "slice3", "price" : 15 } , {"name" : "slice4", "price" : 20 }];

class App extends React.Component{
    /* state consists of number of each slice , total price and burger array (which contains the array/ sequence in which the slices are added) */
    state= {
        slice1 : 0,
        slice2 : 0,
        slice3 : 0,
        slice4 : 0,
        totalPrice : 0,
        burgerArray : []
    }

    addSlice1 = () => {
        this.setState({
            slice1 : this.state.slice1 + 1
        }, () => {
            this.updatePrice();
             this.updateIngredients(1)
        } )
    }
    addSlice2 = () => {
        this.setState({
            slice2 : this.state.slice2 + 1
        } ,() => {
            this.updatePrice();
             this.updateIngredients(2)
        } )
    }
    addSlice3 = () => {
        this.setState({
            slice3 : this.state.slice3 + 1
        } ,() => {
            this.updatePrice();
             this.updateIngredients(3)
        } )
    }
    addSlice4 = () => {
        this.setState({
            slice4 : this.state.slice4 + 1
        } ,() => {
            this.updatePrice();
             this.updateIngredients(4)
        } )
    }

    removeSlice1 = () => {
        this.setState({
            slice1 : this.state.slice1 - 1
        },() => {
            this.updatePrice();
            this.removeUpdateIngredients(1)
        })
    }
    removeSlice2 = () => {
        this.setState({
            slice2 : this.state.slice2 - 1
        },() => {
            this.updatePrice();
            this.removeUpdateIngredients(2)
        })
    }
    removeSlice3 = () => {
        this.setState({
            slice3 : this.state.slice3 - 1
        },() => {
            this.updatePrice();
            this.removeUpdateIngredients(3)
        })
    }
    removeSlice4 = () => {
        this.setState({
            slice4 : this.state.slice4 - 1
        },() => {
            this.updatePrice();
            this.removeUpdateIngredients(4)
        })
    }

    updatePrice = () => {
        this.setState({
            totalPrice : this.state.slice1 * slicePrices[0].price + this.state.slice2 * slicePrices[1].price + this.state.slice3 * slicePrices[2].price + this.state.slice4 * slicePrices[3].price 
        })
    }

    updateIngredients = (x) => {
        this.setState({
            burgerArray :   [...this.state.burgerArray , x]
        })
    }

    removeUpdateIngredients = (toRemove) => {
        let x = this.state.burgerArray;
        x.reverse()
        let y = x.indexOf(toRemove);
        x.splice(y,1)
        x.reverse()
        this.setState({
            burgerArray : x
        })
    }
    render(){
        const slices = [this.state.slice1, this.state.slice2, this.state.slice3, this.state.slice4];
        return(
            <div class="main-wrapper">
                <Burger ingredientsArray = {this.state.burgerArray}  />
                <Controls addSlice1 = {this.addSlice1} removeSlice1 = {this.removeSlice1} 
                          addSlice2 = {this.addSlice2} removeSlice2 = {this.removeSlice2}
                          addSlice3 = {this.addSlice3} removeSlice3 = {this.removeSlice3} 
                          addSlice4 = {this.addSlice4} removeSlice4 = {this.removeSlice4} 
                          slices = {slices} 
                          slicePrices = {slicePrices} 
                          totalPrice = {this.state.totalPrice} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
)