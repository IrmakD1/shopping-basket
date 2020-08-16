import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './items'

const mockItemList = [
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

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('items actions', () => {
    describe('add item action', () => {
        test('should add the Items to the state', () => {
            expect(actions.addItems(mockItemList)).toMatchObject({
                type:actions.ADD_ITEMS,
                items: mockItemList
            })
        })
    })
})

describe('loadInitialData', () => {
    let store;
    let actionSequence;

    test('it should call the addItems action', () => {
        store = mockStore()

        store.dispatch(actions.loadInitialData(mockItemList))
        
        actionSequence = store.getActions();

        expect(actionSequence[0]).toEqual({
            type: 'ADD_ITEMS',
            items: mockItemList
        })
    })
})