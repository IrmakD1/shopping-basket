import basket from './basket'
import * as actions from '../actions/basket'

const mockBasketItem = {
    currency:'USD',
    currencyUnit:'$',
    id:'testId',
    img:'/static/media/soup.63bfac97.png',
    item:'Soup',
    price:'0.55',
    unit:'tin',
}

const initialState = {
    basket: []
}

const existingState = {
    basket: [{
        currency:'USD',
        currencyUnit:'$',
        id:'testId',
        img:'/static/media/soup.63bfac97.png',
        item:'Soup',
        price:'0.55',
        unit:'tin',
    }]
}

const unknownAction = {
    type: 'UNKNOWN_ACTION',
};

describe('basket state', () => {
    describe('when state is not provided', () => {
        test('it should use the initial state', () => {
            const after = basket(undefined, unknownAction);

            expect(after).toEqual(initialState);
        })
    })

    describe('when an unknown action is called', () => {
        test('it should not change the state', () => {
          const after = basket(initialState, unknownAction);
    
          expect(after).toEqual(initialState);
        });
    });

    describe(`when the "${actions.ADD_BASKET_ITEM}" action is called`, () => {
        test('it should update the state with the basket item', () => {
          const action = {
            type: actions.ADD_BASKET_ITEM,
            item: mockBasketItem,
          };
    
          const after = basket(initialState, action);
    
          expect(after).toEqual({
            basket: [{...mockBasketItem}]
          });
        });
    });
    describe(`when the "${actions.REMOVE_BASKET_ITEM}" action is called`, () => {
        test('it should update the state with the basket item', () => {
          const action = {
            type: actions.REMOVE_BASKET_ITEM,
            id: mockBasketItem.id,
          };
    
          const after = basket(existingState, action);
    
          expect(after).toEqual({
            basket: []
          });
        });
    });

    describe(`when the "${actions.ADD_NEW_BASKET}" action is called`, () => {
        test('it should update the state with the basket item', () => {
          const action = {
            type: actions.ADD_NEW_BASKET,
            basket: mockBasketItem,
          };
    
          const after = basket(initialState, action);
    
          expect(after).toEqual({
            basket: mockBasketItem
          });
        });
    });

    describe(`when the "${actions.CLEAR_BASKET}" action is called`, () => {
        test('it should update the state with the basket item', () => {
          const action = {
            type: actions.CLEAR_BASKET,
          };
    
          const after = basket(existingState, action);
    
          expect(after).toEqual({
            basket: []
          });
        });
    });
})

