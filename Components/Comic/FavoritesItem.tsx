import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import favoriteSlice, { selectFavoriteState, setFavoriteState } from '../../store/favoriteSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
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
        const newFavorites = favorites.filter (favorite => favorite.id != id);
        dispatch(setFavoriteState(newFavorites));
        localStorage.setItem('currentFaves', JSON.stringify(newFavorites));
    }

    return (
        <article className={styles["faved-comic"]}>
            <div className={styles["img-cont"]}>
                <Image
                    src={imageSource}
                    alt={`${title} cover photo`}
                    fill
                />
                <button className={styles['remove-btn']} onClick={removeFromFavorites}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
            <div className={styles['comic-info']}>
                <h4 className={styles["comic-title"]}>{title}</h4>
                <span className={styles['issue-number']}>Issue: {issue}</span>
            </div>
        </article>
    )
}

export default FavoritesItem;