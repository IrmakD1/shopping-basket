import { createStore } from 'redux';

import store from './index';
import reducer from '../reducers'
import middleware from '../middleware';

jest.mock('redux', () => ({
    createStore: jest.fn(),
    applyMiddleware: jest.fn(),
}));

jest.mock('../reducers', () => ({
    reducer: jest.fn()
}));

describe('store', () => {

    test('should be equal to the result of calling the store', () => {
        expect(store).toEqual(createStore(reducer, middleware))
    })
})

