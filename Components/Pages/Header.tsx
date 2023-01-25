import Logo from './Logo';
import { useSelector } from "react-redux";
import { selectFavoriteState } from '../../store/favoriteSlice';
import styles from '../../styles/Hero.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";

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

export default function Header() {

  const favorites = useSelector(selectFavoriteState); 

    return(
        <section className={styles['hero-section']}>
        <nav className={styles['nav-section']}>
          {navItems.map((item) => (
            <a href={item.path} className={styles['nav-link']}>{item.label}</a>
          ))}
            <a href="#" className={styles['nav-link']}>
            <FontAwesomeIcon icon={faBoltLightning} /> My Favorites <span>({favorites.length})</span></a>
        </nav>
        <Logo />
        <div className={styles['hero-text']}>
          <h1>Comic Closet</h1>
        </div>
      </section>
    )   
}