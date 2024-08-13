import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => (
    <header className={styles.navbar}>
        <h1><Link to="/">WebTech PUC Minas</Link></h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/labs">Labs</Link></li>
            </ul>
        </nav>
    </header>
);

export default Navbar;