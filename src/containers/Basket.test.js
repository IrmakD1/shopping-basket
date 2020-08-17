// import React from 'react';
// import ReactTestUtils from 'react-dom/test-utils';
// import renderer from 'react-test-renderer';
// import { Provider } from 'react-redux';

// import store from '../store';
// import * as basketActions from '../actions/basket'
// import * as errorActions from '../actions/error'
// import Container, { Basket } from './Basket';


// const MockComponent = React.createElement('div');

// const mockBasketItems = {
//     Soup: [
//         {
//             currency: "USD",
//             currencyUnit: "$",
//             id: "w2befn6n7zrjhio2a716k",
//             img: "/static/media/soup.63bfac97.png",
//             item: "Soup",
//             price: 0.65,
//             unit: "tin"
//         },
//         {
//             currency: "USD",
//             currencyUnit: "$",
//             id: "s1h0clu3yuszrlppzwtdvk",
//             img: "/static/media/soup.63bfac97.png",
//             item: "Soup",
//             price: 0.65,
//             unit: "tin"
//         },
//     ],
//     Bread: [
//         {
//             currency: "USD",
//             currencyUnit: "$",
//             id: "qotrddhy0xnhjkxmod9e",
//             img: "/static/media/bread.e94db65d.png",
//             item: "Bread",
//             price: 0.8,
//             unit: "loaf"
//         },
//         {
//             currency: "USD",
//             currencyUnit: "$",
//             id: "99ccmikkpg7rl5gz0sauvh",
//             img: "/static/media/bread.e94db65d.png",
//             item: "Bread",
//             price: 0.8,
//             unit: "loaf"
//         }
//     ]
// }

// const mockItemsList= [
// {
//     currency: "USD",
//     currencyUnit: "$",
//     id: "w2befn6n7zrjhio2a716k",
//     img: "/static/media/soup.63bfac97.png",
//     item: "Soup",
//     price: 0.65,
//     unit: "tin"
// },
// {
//     currency: "USD",
//     currencyUnit: "$",
//     id: "s1h0clu3yuszrlppzwtdvk",
//     img: "/static/media/soup.63bfac97.png",
//     item: "Soup",
//     price: 0.65,
//     unit: "tin"
// },
// {
//     currency: "USD",
//     currencyUnit: "$",
//     id: "qotrddhy0xnhjkxmod9e",
//     img: "/static/media/bread.e94db65d.png",
//     item: "Bread",
//     price: 0.8,
//     unit: "loaf"
// },
// {
//     currency: "USD",
//     currencyUnit: "$",
//     id: "99ccmikkpg7rl5gz0sauvh",
//     img: "/static/media/bread.e94db65d.png",
//     item: "Bread",
//     price: 0.8,
//     unit: "loaf"
// }]

// const mockTotalItems = 4

// jest.mock('../selectors/basket', () => ({
//     getBasketItems: jest.fn(() => mockBasketItems),
//     getItemsList: jest.fn(() => mockItemsList),
//     getBasketTotalItems: jest.fn(() => mockTotalItems)
// }));

// jest.mock('../selectors/error', () => ({
//     getError: jest.fn(() => mockError)
// }));

// jest.mock('react-router-dom', () => ({
//     Link: () => MockComponent,
//     withRouter: Child => Child,
// }));

// const props = {
//     store: store,
//     basket: mockBasketItems,
//     basketItemsList: mockItemsList,
//     totalItems: mockTotalItems,
//     handleClearError: errorActions.handleClearError,
//     handleAddError: errorActions.handleAddError,
//     handleAddBasketItem: basketActions.handleAddBasketItem,
//     handleRemoveBasketItem: basketActions.handleRemoveBasketItem,
//     handleClearBasket: basketActions.handleClearBasket,
//     handleChangeBasketPrice: basketActions.handleChangeBasketPrice
// }

// describe('VariantList Container', () => {
//     let component;
  
//     beforeEach(() => {
  
//       component = ReactTestUtils.renderIntoDocument(
//         <Provider store={store}>
//           <Basket {...props} />
//         </Provider>
//       );
//     });
  
//     test('should exist', () => {
//       expect(ReactTestUtils.isCompositeComponent(component)).toBeTruthy();
//     });
// })
