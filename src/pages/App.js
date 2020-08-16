import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

import FoodListPage from './FoodListPage';
import BasketPage from './BasketPage';
import SuccessPage from './SuccessPage';
import { NavBar, Header, NoMatch } from '../components'
import * as itemsActions from '../actions/items';
import * as basketSelectors from '../selectors/basket';
import { data } from '../data'

import './App.css';

const mapStateToProps = (state) => ({
  totalItems: basketSelectors.getBasketTotalItems(state)
})

export class App extends Component {
  
  componentDidMount() {
    const { loadInitialData } = this.props
    loadInitialData(data)
  }
  
  render() {

    const { totalItems } = this.props

    return (
      <div>
        <Header text={'Awesome Shopping Basket App!'} />
        <Router>
          <div className='page-content'>
            <div className='navigation-bar'>
              <NavBar total={totalItems} match='/'/>
            </div>
            <Switch>
            <Route exact path='/' component={FoodListPage} />
            <Route exact path='/basket' component={BasketPage} />
            <Route exact path='/success' component={SuccessPage} />
            <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default connect(mapStateToProps, {...itemsActions})(App)