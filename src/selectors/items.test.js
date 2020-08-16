import * as selectors from './items';

const MockState = {
  itemsList: {
      Kevin: 'Bacon'
    }
};


describe('item selectors', () => {
  describe('getItemsList', () => {
    test('it should return the itemsList state', () => {
      expect(selectors.getItemsList(MockState)).toEqual(MockState.itemsList);
    });
  });
});

