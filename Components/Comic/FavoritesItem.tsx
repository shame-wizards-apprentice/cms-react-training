import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteState, setFavoriteState } from '../../store/favoriteSlice';
import styles from '../../styles/Favorites.module.css';

export interface FavoriteProps {
    issue: number;
    title: string;
    imageSource: string;
    id: number;
}

const FavoritesItem = ({ issue, title, imageSource, id }: FavoriteProps) => {
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavoriteState);
    
    const removeFromFavorites = (event: React.MouseEvent) => {
        const newFavorites = favorites.filter(favorite => {favorite.id !== id});
        dispatch(setFavoriteState(newFavorites));
    }

    return (
        <article className={styles["faved-comic"]}>
            <div className={styles["img-cont"]}>
                <Image
                    src={imageSource}
                    alt={`${title} cover photo`}
                    fill
                />
                <button className={styles['remove-btn']} onClick={removeFromFavorites}>X</button>
            </div>
            <h3 className={styles["comic-title"]}>{title}</h3>
            <span className={styles['issue-number']}>{issue}</span>
        </article>
    )
}

export default FavoritesItem;