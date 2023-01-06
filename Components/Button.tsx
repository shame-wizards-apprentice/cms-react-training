import styles from '../styles/Comic.module.css';

type ButtonProps = {
    id: number;
    saved: boolean;
    onClick(): void;
}

const Button = ({id, saved, onClick}: ButtonProps) => {
    const ariaLabel = `${saved ? 'remove from favorites' : 'save to favorites'}`
    return (
        <button
            className={styles["favorite-button"]}
            data-id={id}
            onClick={onClick}
            aria-label = {ariaLabel}
        ></button>
    )
}

export default Button;