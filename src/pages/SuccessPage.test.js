import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SuccessPage from './SuccessPage';

describe('BasketPage page', () => {
    let renderer;
    let result;
    beforeEach(() => {
      renderer = new ShallowRenderer();
      renderer.render(<SuccessPage />);
      result = renderer.getRenderOutput();
    });
    test('it should render', () => {
      expect(result).toMatchSnapshot();
    });
});