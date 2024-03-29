import React, { Component } from 'react';
import { map } from 'lodash'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import * as itemsSelectors from '../selectors/items'
import * as basketSelectors from '../selectors/basket'
import * as couponSelectors from '../selectors/coupon'
import * as basketActions from '../actions/basket'
import * as errorActions from '../actions/error'

import { FoodItem } from '../components';

const mapStateToProps = (state) => ({
    //returns the list of food items from the state
    itemsList: itemsSelectors.getItemsList(state),
    //Returns the unsorted basket object in the state
    basketItemsList: basketSelectors.getItemsList(state),
    coupon: couponSelectors.getCoupon(state)
})

export class Food extends Component {

    componentDidMount() {
        const { handleClearError } = this.props

        handleClearError()
    }

    handleClick = (event) => {
        const { basketItemsList, handleAddBasketItem, coupon } = this.props
        handleAddBasketItem(event, basketItemsList, coupon)
    }

    render() {
        const { itemsList, basketItemsList } = this.props

        return (
            <div className='food-page'>
                <div className='item-list'>
                    <ul className='food-list'>
                        {map(itemsList, item => (
                            <li key={item.item}>
                                <FoodItem 
                                    item={item} 
                                    handleClick={this.handleClick}
                                    totalCost={item.price}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className='checkout-button'>
                        <Link to='/basket'>
                            <button 
                                className='button-is-secondary'
                                disabled={basketItemsList.length === 0}>
                                    Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
} 


export default connect(mapStateToProps, {...basketActions, ...errorActions})(Food)