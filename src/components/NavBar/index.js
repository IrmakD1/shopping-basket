import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

const NavItem = ({ route, text, style, total = null }) => {
    return (
        <Link to={route}>
            <button className={`button-is-${style}`}>{text} {total}</button>
        </Link>
    )
}

const NavBar = ({ total, match }) => {
    
    const checkPrimary = (route, currentPage) => {
        return route === currentPage ? 'primary' : 'secondary'
    }

    return (
        <div className='nav-bar'>
            <ul>
                <li key='1'>
                    <NavItem route='/' text='Food List' style={checkPrimary('/', match.params)} />
                </li>
                <li>
                    <NavItem route='/basket' text='Basket:' style={checkPrimary('/basket', match.params)} total={total}/>
                </li>
            </ul>
        </div>
    )
}

export default NavBar