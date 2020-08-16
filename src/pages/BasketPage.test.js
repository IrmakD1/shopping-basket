import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import BasketPage from './BasketPage';

describe('BasketPage page', () => {
    let renderer;
    let result;
    beforeEach(() => {
      renderer = new ShallowRenderer();
      renderer.render(<BasketPage />);
      result = renderer.getRenderOutput();
    });
    test('it should render', () => {
      expect(result).toMatchSnapshot();
    });
});