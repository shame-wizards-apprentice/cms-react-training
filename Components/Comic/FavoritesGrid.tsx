import React from 'react';
import { useSelector } from "react-redux";
import { selectFavoriteState } from '../../store/favoriteSlice';
import FavoritesItem from './FavoritesItem';
import styles from '../../styles/Favorites.module.css';

export default function FavoritesGrid() {
    const favorites = useSelector(selectFavoriteState);

    return(
        <section className={styles['favorites-grid']}>
            <h3>Favorites</h3>
            {favorites?.map((favorite) => (
                <FavoritesItem issue={favorite.issue} title={favorite.title} imageSource={favorite.imageSource} id={favorite.id}/>
            ))}
        </section>
    )
}