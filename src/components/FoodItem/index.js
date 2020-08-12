import React from 'react'
import './styles.css'


const FoodItem = ({ item, handleClick, handleDelete, total, totalCost, display }) => {
    return (
        <div className='item-box'>
            <div className='food-icon'>
                <img src={item.img} alt={`${item.item} icon`}/>
            </div>
            <p>{`${total} ${item.unit} of ${item.item}: ${item.currencyUnit}${totalCost}`}</p>
            <button className='plus-button' onClick={() => handleClick(item)}> + </button>
            <button className={`minus-button-display-${display}`} onClick={() => handleDelete(item)}> - </button>
        </div>
    )
}

FoodItem.defaultProps = {
    total: '',
    display: false
}

export default FoodItem