import React from 'react';
import renderer from 'react-test-renderer';
import NoMatch from '.';

describe('NoMatch Component', () => {
    let component;
    let tree;
  
    beforeEach(() => {
      component = renderer.create(
        <div>
                <NoMatch />
        </div>
      );
      tree = component.toJSON();
    });
  
    test('it should render', () => {
      expect(tree).toMatchSnapshot();
    });
});
  