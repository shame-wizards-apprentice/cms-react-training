import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

const navItems = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/shop',
      label: 'Shop',
    }
]

export default function Footer() {
    return(
        <footer className={styles['footer']}>
            <div className={styles['logo-cont']}></div>
            <ul className={styles['footer-links']}>
                <li><Link href='/shop'>Privacy Policy</Link></li>
                <li><Link href='/shop'>Terms of Service</Link></li>
            </ul>
            <span className={styles['footer-attribution']}>Copyright 2022. Comic Closet, LLC. All rights reserved.</span>
        </footer>
    )
}