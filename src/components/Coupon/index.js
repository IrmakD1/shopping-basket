import React, { Component } from "react"

class Coupon extends Component {

    state = {
        text: ''
    }

    handleChange = (e) => {
        const text = e.target.value

        this.setState(() => ({
            text
        }))
    }

    submitCoupon = () => {
        const { text } = this.state
        const { handleClick } = this.props

        handleClick(text)

        this.setState(() => ({
            text: ''
        }))
    }



    render() {
        const { text } = this.state

        return (
            <div className='coupon-field'>
                <input 
                    type='text'
                    placeholder='Enter code'
                    value={text}
                    onChange={this.handleChange}
                />
                <button
                    className='button-is-secondary' 
                    onClick={this.submitCoupon}
                    disabled={text === ''}
                >
                    Apply
                </button>
            </div>
        )
    }
}

export default Coupon