// import React from 'react';
// import ReactTestUtils from 'react-dom/test-utils';

// import renderer from 'react-test-renderer';
// import { Provider } from 'react-redux';

// import * as basketSelectors from '../selectors/basket';
// import store from '../store'
// import Container, { App } from './App'

// const MockComponent = React.createElement('div');

// jest.mock('react-router-dom', () => ({
//     Route: () => MockComponent,
//     Switch: () => MockComponent,
//     BrowserRouter: () => MockComponent,
// }));

// const props = {
//     totalItems: 4,
//     loadInitialData: jest.fn()
// }

// describe('Main App component', () => {
//     let component

//     let testStore = store

//     beforeEach(() => {
//         component = ReactTestUtils.renderIntoDocument(
//             <Provider store={testStore}>
//               <Container store={testStore} />
//             </Provider>
//           );
//     })

//     test('should exist', () => {
//         expect(ReactTestUtils.isCompositeComponent(component)).toBeTruthy();
//     });
// })