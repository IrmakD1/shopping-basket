import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { convertBasket } from '../services'
import * as actions from './basket'


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockConvertedBasket = {
    currency:'GBP',
    currencyUnit:'£',
    id:'testId',
    img:'/static/media/soup.63bfac97.png',
    item:'Soup',
    price:'0.55',
    unit:'tin',
}

const mockExistingBasket = [
    {
        currency:'GBP',
        currencyUnit:'£',
        id:'testId1',
        img:'/static/media/soup.63bfac97.png',
        item:'Soup',
        price:'0.50',
        unit:'tin',
    },
    {
        currency:'GBP',
        currencyUnit:'£',
        id:'testId2',
        img:'/static/media/bread.e94db65d.png',
        item:'Bread',
        price:'0.61',
        unit:'loaf',
    }
]

const mockEmptyExistingBasket = []

const mockBasketItem = {
    currency:'USD',
    currencyUnit:'$',
    id:'testId',
    img:'/static/media/soup.63bfac97.png',
    item:'Soup',
    price:'0.55',
    unit:'tin',
}

jest.mock('../services', () => ({
    convertBasket: jest.fn(() => mockConvertedBasket)
}))

jest.mock('../helpers', () => ({
    generateUID: jest.fn(() => 'testId')
}))


describe('basket actions', () => {
    describe('add new basket item action', () => {
        test('should add the basket Item to the state', () => {
            expect(actions.addBasketItem(mockBasketItem)).toMatchObject({
                type:actions.ADD_BASKET_ITEM,
                item: mockBasketItem
            })
        })
    })

    describe('add new basket action', () => {
        test('should add the basket to the state', () => {
            expect(actions.addNewBasket(mockBasketItem)).toMatchObject({
                type:actions.ADD_NEW_BASKET,
                basket: mockBasketItem
            })
        })
    })

    describe('remove basket item', () => {
        test('should remove the basket item from the state', () => {
            expect(actions.removeBasketItem('testId')).toMatchObject({
                type:actions.REMOVE_BASKET_ITEM,
                id: 'testId'
            })
        })
    })

    describe('clear basket item', () => {
        test('should clear the basket from the state', () => {
            expect(actions.clearBasket()).toMatchObject({
                type:actions.CLEAR_BASKET,
            })
        })
    })
})

describe('handleAddBasketItem', () => {
    let store;
    let actionSequence;

    test('when the basket already exists', async () => {
        store = mockStore()

        await store.dispatch(actions.handleAddBasketItem(mockBasketItem, mockExistingBasket))
        
        actionSequence = store.getActions();
        
        expect(convertBasket).toHaveBeenCalledWith(
            mockBasketItem, 
            mockBasketItem.currency,
            mockExistingBasket[0].currency
        )

        expect(actionSequence[0]).toEqual({
            type:'ADD_BASKET_ITEM',
            item: mockConvertedBasket
        })
    })

    test('when the basket is empty', async () => {
        store = mockStore()

        await store.dispatch(actions.handleAddBasketItem(mockBasketItem, mockEmptyExistingBasket))
        
        actionSequence = store.getActions();

        expect(actionSequence[0]).toEqual({
            type:'ADD_BASKET_ITEM',
            item: mockBasketItem
        })
    })
})

describe('handleRemoveBasketItem', () => {
    let store;
    let actionSequence;

    test('it should call the removeBasket action', () => {
        store = mockStore()

        store.dispatch(actions.handleRemoveBasketItem(mockBasketItem))
        
        actionSequence = store.getActions();

        expect(actionSequence[0]).toEqual({
            type: 'REMOVE_BASKET_ITEM',
            id: 'testId'
        })
    })
})

describe('handleChangeBasketPrice', () => {
    let store;
    let actionSequence;

    test('it should call the clearBasket and add newBasket actions', () => {
        store = mockStore()

        store.dispatch(actions.handleChangeBasketPrice(mockBasketItem))
        
        actionSequence = store.getActions();

        expect(actionSequence[0]).toEqual({
            type: 'CLEAR_BASKET',
        })
        expect(actionSequence[1]).toEqual({
            type: 'ADD_NEW_BASKET',
            basket: mockBasketItem
        })
    })
})

describe('handleClearBasketPrice', () => {
    let store;
    let actionSequence;

    test('it should call the clearBasket action', () => {
        store = mockStore()

        store.dispatch(actions.handleClearBasket())
        
        actionSequence = store.getActions();

        expect(actionSequence[0]).toEqual({
            type: 'CLEAR_BASKET',
        })
    })
})

