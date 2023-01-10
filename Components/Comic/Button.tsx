import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteState, setFavoriteState } from '../../store/favoriteSlice';
import styles from '../../styles/Comic.module.css';

type ButtonProps = {
    id: number;
    onClick(): void;
}

const Button = ({id, onClick}: ButtonProps) => {
    const [full, setFull] = useState(false);

    const dispatch = useDispatch();
    const favorites = useSelector(selectFavoriteState);

    const addToFavorites = (event: React.MouseEvent) => {
        if(favorites.length > 10) {
            setFull(true);
        }
    }
    return (
        <button
            className={styles["favorite-button"]}
            data-id={id}
            onClick={onClick}
            aria-label = 'Save to favorites'
        ></button>
    )
}

export default Button;