import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FoodListPage from './BasketPage';

describe('FoodList page', () => {
    let renderer;
    let result;
    beforeEach(() => {
      renderer = new ShallowRenderer();
      renderer.render(<FoodListPage />);
      result = renderer.getRenderOutput();
    });
    test('it should render', () => {
      expect(result).toMatchSnapshot();
    });
});