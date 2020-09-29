import React from 'react';
import { FaBook } from 'react-icons/fa'

import './styles.css';

const Header = () => {
    return (
        <>
        <h1 className="title"><FaBook /> bookFinder</h1>
        <div className="info">
        <p className="subtitle">Explore livros no GoogleBooks</p>
        <div className='menu'>
            <a href="#">Search</a>
            <a href="#">About us</a>
        </div>

        </div>
        </>
    );
}

export default Header;