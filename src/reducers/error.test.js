import error from './error'
import * as actions from '../actions/error'

const initialState = {}

const unknownAction = {
    type: 'UNKNOWN_ACTION',
};

describe('error state', () => {
    describe('when state is not provided', () => {
        test('it should use the initial state', () => {
            const after = error(undefined, unknownAction);

            expect(after).toEqual(initialState);
        })
    })

    describe('when an unknown action is called', () => {
        test('it should not change the state', () => {
          const after = error(initialState, unknownAction);
    
          expect(after).toEqual(initialState);
        });
    });

    describe(`when the "${actions.ADD_ERROR}" action is called`, () => {
        test('it should update the state with the the error item', () => {
          const action = {
            type: actions.ADD_ERROR
          };
    
          const after = error(initialState, action);
    
          expect(after).toEqual({
            error: 'Ooops... Sorry there was an error doing that'
          });
        });
    });

    describe(`when the "${actions.CLEAR_ERROR}" action is called`, () => {
        test('it should update the state with the the error item', () => {
          const action = {
            type: actions.CLEAR_ERROR
          };
    
          const after = error(initialState, action);
    
          expect(after).toEqual({});
        });
    });

})