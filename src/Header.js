import React, { Component } from 'react';
import logo from './whale.png';
import { signOut } from './actions';

const Header = ({ userActual }) => {
    return(
        <header className='text-center'>
            <img className='logo-small' src={logo} />
            <div className='header-user'>
            { userActual && <h1 className='name-user'>Hola {userActual.name}</h1>}
            <button className='sign-out' onClick={signOut}>Sign Out</button>
            </div>
        </header>
    )
}

export default Header;