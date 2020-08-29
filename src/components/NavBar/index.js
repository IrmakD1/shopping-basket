import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

const NavItem = ({ route, text, total = null }) => {
    return (
        <Link to={route}>
            <button className='button-is-secondary'>{text} {total}</button>
        </Link>
    )
}

const NavBar = ({ total, match }) => {

    return (
        <div className='nav-bar'>
            <ul className='nav-bar-list'>
                <li key='1'>
                    <NavItem route='/' text='Food List' />
                </li>
                <li>
                    <NavItem route='/basket' text='Basket:' total={total}/>
                </li>
            </ul>
        </div>
    )
}

export default NavBar