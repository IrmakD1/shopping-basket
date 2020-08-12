import React, { Component } from 'react';
import greenTick from '../assets/icons/green-tick.png'

export default class SuccessPage extends Component {
  render() {
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
