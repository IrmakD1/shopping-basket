import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer';
import Navbar from '.';

describe('NavBar Component', () => {
    let component;
    let tree;
  
    beforeEach(() => {
      component = renderer.create(
        <div>
            <Router>
                <Navbar total={1}/>
            </Router>
        </div>
      );
      tree = component.toJSON();
    });
  
    test('it should render', () => {
      expect(tree).toMatchSnapshot();
    });
});
  