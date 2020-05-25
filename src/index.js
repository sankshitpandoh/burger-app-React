import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Burger from './components/burger';
import Controls from './components/controls';

/* Array containing all slice prices
    i.e slice1 price = slicePrices[0] = 5 
    and so on */
const slicePrices = [5 , 10 , 15 , 20];

class App extends React.Component{
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

    updatePrice = () => {
        this.setState({
            totalPrice : this.state.slice1 * slicePrices[0] + this.state.slice2 * slicePrices[1] + this.state.slice3 * slicePrices[2] + this.state.slice4 * slicePrices[3] 
        })
    }
    
    updateIngredients = (x) => {
        this.setState({
            burgerArray :   [...this.state.burgerArray , x]
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