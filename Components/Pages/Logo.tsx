import styles from '../../styles/Hero.module.css';

export default function Logo() {
    return (
        <a href='/' className={styles['logo-cont']}>
            <div className={styles['logo']}></div>
        </a>
    )
}