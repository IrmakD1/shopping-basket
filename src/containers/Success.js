import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as errorActions from '../actions/error'
import greenTick from '../assets/icons/green-tick.png'

class Success extends Component {
  
  componentDidMount() {
    const { handleClearError } = this.props

    handleClearError()
  }
  
  render () {
        return (
            <div className='success-page'>
              <div>
                <h2 className='purchase-header'>Purchase Confirmed</h2>
              </div>
              <div>
                <div className='tick-icon'>
                    <img className='tick-icon-image' src={greenTick} alt={`green tick icon`}/>
                </div>
              </div>
            </div>
        )
    }
}

const mapStateToProps = () => {}

export default connect(mapStateToProps, {...errorActions})(Success)
