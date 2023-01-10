import React from 'react';
import styles from '../../styles/Footer.module.css';

export default function Footer() {
    return(
        <footer className={styles['footer']}>
            <div className={styles['logo-cont']}></div>
            <ul className={styles['footer-links']}>
                <li><a href='/shop'>Privacy Policy</a></li>
                <li><a href='/shop'>Terms of Service</a></li>
            </ul>
            <span className={styles['footer-attribution']}>Copyright 2022. Comic Closet, LLC. All rights reserved.</span>
        </footer>
    )
}