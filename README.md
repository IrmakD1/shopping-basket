This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## This Project

This project is a simple UI that allows you to put a list of food items into you online basket, and then convert their currency before buying them.

It calls the currency converter api and recieves an exchange rate from USD to your chosen currency, this is then applied to convert your basket.

### `Redux`

This uses project Redux to store all the app state. It has 3 sections of state:

-   ItemsList: The list of the food items available to purchase and their associated data
-   Basket: The list of items that have been added into the basket and are available to buy
-   Error: Stores the errors recieved by 

The 'actions' folder holds all the actions and action handlers

The 'selectors' folder holds all the selectors

The 'reducers' folder holds all the reducers for the different state.

### `API calls`

The services folder is where you can find the calls to the API and as well as how the currecncy conversion is handled and applied to the basket items. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.