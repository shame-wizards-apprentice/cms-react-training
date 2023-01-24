import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectFavoriteState, setFavoriteState } from '../../store/favoriteSlice';
import FavoritesItem from './FavoritesItem';
import styles from '../../styles/Favorites.module.css';

export default function FavoritesGrid() {
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavoriteState);

    useEffect(() => {
        const favoriteString: string = localStorage.getItem('currentFaves');
        const favoritesArray: [] = JSON.parse(favoriteString);

        if(!favoriteString) {
            localStorage.setItem('currentFaves', '[]');
        }

        dispatch(setFavoriteState(favoritesArray));
    }, []);

    return(
        <section className={styles['favorites-grid']}>
            <h3>Favorites</h3>
            {   favorites?.length ?
                favorites?.map((favorite) => (
                    <FavoritesItem issue={favorite.issue} title={favorite.title} imageSource={favorite.imageSource} id={favorite.id}/>
                )) :

                <h3>Don't be a grump, pick some favorites</h3>
            
            }
        </section>
    )
}