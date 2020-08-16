import React from 'react';
import renderer from 'react-test-renderer';
import FoodItem from '.';

const item = {
    unit: 'slice',
    img: 'test',
    item: 'Kevin Bacon',
    currencyUnit: '$',
}

const handleClick = jest.fn()

const handleDelete = jest.fn()


describe('FoodItem Component on Food page', () => {
    let component;
    let tree;
  
    beforeEach(() => {
      component = renderer.create(
        <div>
            <FoodItem 
                item={item}
                handleClick={handleClick}
                totalCost={1}
            />
        </div>
      );
      tree = component.toJSON();
    });
  
    test('it should render', () => {
      expect(tree).toMatchSnapshot();
    });
});

describe('FoodItem Component on basket page', () => {
    let component;
    let tree;
  
    beforeEach(() => {
      component = renderer.create(
        <div>
            <FoodItem 
                item={item}
                handleClick={handleClick}
                totalCost={1}
                total={2}
                display={true}
            />
        </div>
      );
      tree = component.toJSON();
    });
  
    test('it should render', () => {
      expect(tree).toMatchSnapshot();
    });
});
  