import React from 'react';
import renderer from 'react-test-renderer';
import Error from '.';

describe('Error Component', () => {
    let component;
    let tree;
  
    beforeEach(() => {
      component = renderer.create(
        <div>
          <Error text='Whooooopppsss'/>
        </div>
      );
      tree = component.toJSON();
    });
  
    test('it should render', () => {
      expect(tree).toMatchSnapshot();
    });
  });
  