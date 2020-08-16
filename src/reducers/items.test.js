import itemsList from './items'
import * as actions from '../actions/items'

const initialState = {}

const unknownAction = {
    type: 'UNKNOWN_ACTION',
};

const mockItemList = {
    currency: "USD",
    currencyUnit: "$",
    img: "/static/media/soup.63bfac97.png",
    item: "Soup",
    price: 0.65,
    unit: "tin",
}


describe('itemsList state', () => {
    describe('when state is not provided', () => {
        test('it should use the initial state', () => {
            const after = itemsList(undefined, unknownAction);

            expect(after).toEqual(null);
        })
    })

    describe('when an unknown action is called', () => {
        test('it should not change the state', () => {
          const after = itemsList(initialState, unknownAction);
    
          expect(after).toEqual(initialState);
        });
    });

    describe(`when the "${actions.ADD_ITEMS}" action is called`, () => {
        test('it should update the state with the the error item', () => {
          const action = {
            type: actions.ADD_ITEMS,
            items: mockItemList
          };
    
          const after = itemsList(initialState, action);
    
          expect(after).toEqual(mockItemList);
        });
    });
})