import React from 'react';
import renderer from 'react-test-renderer';
import SelectField from '.';

const options = ['Kevin', 'Bacon']

const onChange = jest.fn()

describe('SelectField Component', () => {
    let component;
    let tree;
  
    beforeEach(() => {
      component = renderer.create(
        <div>
            <SelectField 
                options={options}
                value='Kevin Bacon'
                onChange={onChange}
                className={`react-select-container`}
            />
        </div>
      );
      tree = component.toJSON();
    });
  
    test('it should render', () => {
      expect(tree).toMatchSnapshot();
    });
});
  