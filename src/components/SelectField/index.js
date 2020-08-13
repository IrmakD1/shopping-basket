import React from 'react'
import Select from 'react-select'

const SelectField = ({ options, defaultOption, handleChange }) => {
    return (
        <Select 
            value={defaultOption}
            onChange={handleChange}
            options={options}
        />
    )
}


export default SelectField