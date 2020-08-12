import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { map } from 'lodash'
import { connect } from 'react-redux';

import * as basketSelectors from '../selectors/basket'
import * as basketActions from '../actions/basket'
import { convertBasket } from '../services'
import FoodItem from '../components/FoodItem';

const mapStateToProps = (state) => ({
    basket: basketSelectors.getBasketItems(state),
    basketItemsList: basketSelectors.getItemsList(state),
    totalItems: basketSelectors.getBasketTotalItems(state)
})


export class Basket extends Component {
    

    handleClick = (event) => {
        const { basketItemsList, handleAddBasketItem } = this.props

        handleAddBasketItem(event, basketItemsList)
    }


    handleDelete = (itemId) => {
        const { handleRemoveBasketItem} = this.props
    
        handleRemoveBasketItem(itemId)
    }

    handlePurchase = () => {
        const { handleClearBasket } = this.props

        handleClearBasket()
    }

    handleChange = async (event) => {
        const { basketItemsList, handleChangeBasketPrice } = this.props

        const chosenCurrency = event.target.value
        const originalCurrency = basketItemsList[0].currency

        const updatedBasket = await convertBasket(basketItemsList, originalCurrency, chosenCurrency)
        handleChangeBasketPrice(updatedBasket)
    }

    calculateCost = (categoryArray) => {
        let priceArray = map(categoryArray, item => (item.price) * 100)
        const price = (priceArray.reduce((a, b) => a + b, 0)) / 100

        return (Math.round(price * 100) / 100).toFixed(2)
    }

    render() {
        const { basketItemsList, basket } = this.props 

        if(basketItemsList.length === 0) {

            return (
                <div> 
                    <div className='basket-header'>
                        <h3>Your Basket is empty</h3>
                    </div>
                </div>
            )    
        }

        return (

            <div> 
                <div className='basket-header'>
                    <h3>Your Basket</h3>
                </div>
                <div className='basket'>
                    <div>
                        <ul className='basket-list'>
                            {map(basket, foodCategory => (
                                <li key={foodCategory[0].id}>
                                    <FoodItem item={foodCategory[0]} 
                                        handleClick={this.handleClick}
                                        handleDelete={this.handleDelete}
                                        total={foodCategory.length}
                                        totalCost={this.calculateCost(foodCategory)}
                                        display={true}
                                    />
                                </li>
                            ))}
                        </ul>

                        <div className='currency-dropdown'>
                            <select onChange={this.handleChange}>
                                    <option value='USD'>USD</option>
                                    <option value='GBP'>GBP</option>
                                    <option value='EUR'>EUR</option>
                            </select>
                            <Link to='/success'>
                                    <button className='button-is-secondary' onClick={this.handlePurchase}>Buy Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, {...basketActions})(Basket)