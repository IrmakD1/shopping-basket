import { createSelector } from 'reselect';
import { forEach } from 'lodash'

const basketSelector = state => state.basket

export const getBasketTotalItems = createSelector(
    basketSelector,
    basket => basket.basket.length
)

export const getItemsList = createSelector(
    basketSelector,
    basket => basket.basket
)

export const getBasketItems = createSelector(
    basketSelector,
    basket => {
        let basketObject = {}

        forEach(basket.basket, item => {
            basketObject[item.item] = []
        })

        forEach(basket.basket, item => {
            basketObject[item.item].push(item)
        })
        return basketObject
    }
)