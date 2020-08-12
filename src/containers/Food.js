import React, { Component } from 'react';
import { map } from 'lodash'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import * as itemsSelectors from '../selectors/items'
import * as basketSelectors from '../selectors/basket'
import * as basketActions from '../actions/basket'

import FoodItem from '../components/FoodItem';

const mapStateToProps = (state) => ({
    basket: basketSelectors.getBasketItems(state),
    itemsList: itemsSelectors.getItemsList(state),
    basketItemsList: basketSelectors.getItemsList(state)
})

export class Food extends Component {

    handleClick = (event) => {
        const { basketItemsList, handleAddBasketItem } = this.props

        handleAddBasketItem(event, basketItemsList)
    }

    render() {
        const { itemsList } = this.props

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
                    <Link to='/basket'>
                        <button className='button-is-secondary'>Checkout</button>
                    </Link>
                </div>
            </div>
        )
    }
} 


export default connect(mapStateToProps, {...basketActions})(Food)