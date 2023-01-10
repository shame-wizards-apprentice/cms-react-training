import Logo from './Logo';
import styles from '../../styles/Hero.module.css';

const navItems = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/shop',
      label: 'Shop',
    },
    {
      path: '/my-favorites',
      label: 'My Favorites',
    }
]

export default function Header() {
    return(
        <section className={styles['hero-section']}>
        <nav className={styles['nav-section']}>
          {navItems.map((item) => (
            <a href={item.path} className={styles['nav-link']}>{item.label}</a>
          ))}
        </nav>
        <Logo />
        <div className={styles['hero-text']}>
          <h1>Comic Closet</h1>
        </div>
      </section>
    )   
}