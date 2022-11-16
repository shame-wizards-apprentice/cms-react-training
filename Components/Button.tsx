import styles from '../styles/Comic.module.css';

type ButtonProps = {
    id: number;
    title: string;
    saved: boolean;
    onClick: React.MouseEventHandler;
}

const Button = (props: ButtonProps) => {
    const ariaLabel = `${props.saved ? 'remove from favorites' : 'save to favorites'}`
    return (
        <button
            className={styles["favorite-button"]}
            data-id={props.id}
            onClick={props.onClick}
            aria-label = {ariaLabel}
        ></button>
    )
}

export default Button;