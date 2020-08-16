import React from 'react'
import Select from 'react-select'
import './styles.css'

const SelectField = ({ options, defaultOption, handleChange, display }) => {
    return (
        <Select 
            value={defaultOption}
            onChange={handleChange}
            options={options}
            className={`react-select-container`}
        />
    )
}


export default SelectField