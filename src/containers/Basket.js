import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { map } from 'lodash'
import { connect } from 'react-redux';

import * as basketSelectors from '../selectors/basket'
import * as errorSelectors from '../selectors/error'
import * as couponSelectors from '../selectors/coupon'
import * as basketActions from '../actions/basket'
import * as errorActions from '../actions/error'
import * as couponActions from '../actions/coupon'
import { convertBasket } from '../services'
import { FoodItem, SelectField, Error, Coupon } from '../components';
import { currencyOptions } from '../data/currency'

const mapStateToProps = (state) => ({
    //Groups the basket into an array of all the food categories
    basket: basketSelectors.getBasketItems(state),
    //Returns the unsorted basket object in the state
    basketItemsList: basketSelectors.getItemsList(state),
    //Returns the error from the store
    error: errorSelectors.getError(state),
    //Returns the existing coupon from the store
    existingCoupon: couponSelectors.getCoupon(state)
})

export class Basket extends Component {

    componentDidMount() {
        const { handleClearError } = this.props

        handleClearError()
    }
    

    handleClick = (event) => {
        const { basketItemsList, handleAddBasketItem, existingCoupon } = this.props

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
        const { basketItemsList, handleChangeBasketPrice, handleAddError } = this.props

        const chosenCurrency = event.value
        const originalCurrency = basketItemsList[0].currency

        try {
            const updatedBasket = await convertBasket(basketItemsList, originalCurrency, chosenCurrency)
            handleChangeBasketPrice(updatedBasket)
        } catch (err) {
            handleAddError('Ooops... Sorry there was an error doing that')
        }
    }

    //If the currency is not USD the dropdown will not display, as you cannot make a second request to the api
    displaySelect = () => {
        const { basketItemsList} = this.props

        if (basketItemsList[0].currency === 'USD') return true
        else return false
    }

    //calculates the total cost of all of one category of food in the basket
    calculateCost = (categoryArray) => {
        let priceArray = map(categoryArray, item => (item.price) * 100)
        const price = (priceArray.reduce((a, b) => a + b, 0)) / 100

        return (Math.round(price * 100) / 100).toFixed(2)
    }

    //calculates the total cost of the basket
    calculateTotalCost = () => {
        const { basket } = this.props

        const basketTotalArray = map(basket, foodCategory => {
            return this.calculateCost(foodCategory)
        })

        const priceArray = map(basketTotalArray, item => (item) * 100)
        const price = (priceArray.reduce((a, b) => a + b, 0)) / 100

        return (Math.round(price * 100) / 100).toFixed(2)
    }
    
    applyCoupon = (code) => {
        const { basketItemsList, handleAddCoupon, handleAddError, existingCoupon } = this.props
        try {
            handleAddCoupon(existingCoupon, code, basketItemsList)
        } catch (err) {
            handleAddError(err.message)
        }
    }

    render() {
        const { basketItemsList, basket, error } = this.props

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
                {error !== undefined && (
                    <div>
                        <Error text={error} /> 
                    </div>
                )}
                {this.displaySelect() && (
                    <div className='currency-dropdown'>
                        <SelectField
                            options={currencyOptions}
                            defaultOption={basketItemsList[0].currency} 
                            handleChange={this.handleChange}
                            display={this.displaySelect}
                        />
                    </div>
                )}
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
                        <div className='basket-total'>
                            <p>{`Basket Total: ${basketItemsList[0].currencyUnit}${this.calculateTotalCost()}`}</p>
                        </div>
                        <div className='buy-button'>
                            <Link to='/success'>
                                    <button className='button-is-secondary' onClick={this.handlePurchase}>Buy Now</button>
                            </Link>
                        </div>
                            <Coupon handleClick={this.applyCoupon}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, {...basketActions, ...errorActions, ...couponActions})(Basket)