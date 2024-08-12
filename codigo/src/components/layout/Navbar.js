// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Header = () => (
    <header className={styles.navbar}>
        <h1><Link to="/">WebTech PUC Minas</Link></h1>
        <nav>
            <ul>
                <li><Link to="/">Sobre</Link></li>
                <li><Link to="/">Labs</Link></li>
                <li><Link to="/">Eventos</Link></li>
                <li><Link to="/">Equipe</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;