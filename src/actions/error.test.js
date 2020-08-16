import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './error'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('error actions', () => {
    describe('add error', () => {
        test('should add error to the state', () => {
            expect(actions.addError()).toMatchObject({
                type:actions.ADD_ERROR
            })
        })
    })
    describe('clear error', () => {
        test('should clear error from the state', () => {
            expect(actions.clearError()).toMatchObject({
                type:actions.CLEAR_ERROR
            })
        })
    })
})

describe('handleAddError', () => {
    let store;
    let actionSequence;

    test('it should call the addError action', () => {
        store = mockStore()

        store.dispatch(actions.handleAddError())
        
        actionSequence = store.getActions();

        expect(actionSequence[0]).toEqual({
            type: 'ADD_ERROR'
        })
    })
})

describe('handleClearError', () => {
    let store;
    let actionSequence;

    test('it should call the clearError action', () => {
        store = mockStore()

        store.dispatch(actions.handleClearError())
        
        actionSequence = store.getActions();

        expect(actionSequence[0]).toEqual({
            type: 'CLEAR_ERROR'
        })
    })
})