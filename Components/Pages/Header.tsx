import React, { useState, useEffect, useCallback } from 'react';
import Logo from './Logo';
import { useSelector } from "react-redux";
import { selectFavoriteState } from '../../store/favoriteSlice';
import styles from '../../styles/Hero.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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

const breakpoint = 1024;
const resizeEvents = ["resize", "orientationchange"]

export default function Header() {
  const [mobile, setMobile] = useState(true);

  const handleResize = useCallback(() => {
    window.innerWidth >= breakpoint ?
    setMobile(false) :
    setMobile(true)
  }, [])

  useEffect(() => {
    handleResize();

    resizeEvents.forEach((e) => window.addEventListener(e, handleResize));
  }, [])

  const favorites = useSelector(selectFavoriteState); 

    return(
        <section className={styles['hero-section']}>
        <nav className={styles['nav-section']}>
          {mobile ?
            <button 
              className={styles["mobile-nav-toggle"]}
              aria-label="open mobile nav">
              <FontAwesomeIcon icon={faBars} />
            </button> :
            <div className={styles["nav-cont"]}>
              {navItems.map((item) => (
                <a href={item.path} className={styles['nav-link']}>{item.label}</a>
              ))}
            </div>
          }
          {mobile ? 
            <span className={styles['nav-link']}><FontAwesomeIcon icon={faBoltLightning} /><span>({favorites.length})</span></span> :
            <a href="#" className={styles['nav-link']}>
            <FontAwesomeIcon icon={faBoltLightning} /> My Favorites <span>({favorites.length})</span>
            </a>
          }
        </nav>
        <Logo />
        <div className={styles['hero-text']}>
          <h1>Comic Closet</h1>
        </div>
      </section>
    )   
}