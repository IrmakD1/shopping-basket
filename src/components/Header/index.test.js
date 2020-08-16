import React from 'react';
import renderer from 'react-test-renderer';
import Header from '.';

describe('Header Component', () => {
    let component;
    let tree;
  
    beforeEach(() => {
      component = renderer.create(
        <div>
          <Header text='I am a Header'/>
        </div>
      );
      tree = component.toJSON();
    });
  
    test('it should render', () => {
      expect(tree).toMatchSnapshot();
    });
  });
  