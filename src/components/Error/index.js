import React from 'react'
import './styles.css'

const Error = ({text}) => {
    return (
        <div className='error-banner'>
            <h4>{text}</h4>
        </div>
    )
}

export default Error