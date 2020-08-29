import { createSelector } from 'reselect';


const couponSelector = state => state.coupon

export const getCoupon = createSelector(
    couponSelector,
    coupon => coupon
)