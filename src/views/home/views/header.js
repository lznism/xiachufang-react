import React from 'react';
import logoUrl from '../../../assets/images/logo.png';

function Header() {
    return (
        <header>
            <img src={logoUrl} alt="logo" className="logo"/>
        </header>
    )
}

export default Header;