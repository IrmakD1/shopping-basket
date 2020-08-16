import * as selectors from './error';

const MockState = {
  error: {
     error: 'ooooops'
    }
};


describe('error selectors', () => {
  describe('getError', () => {
    test('it should return the error state', () => {
      expect(selectors.getError(MockState)).toEqual('ooooops');
    });
  });
});

