import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectFavoriteState, setFavoriteState } from '../../store/favoriteSlice';
import FavoritesItem from './FavoritesItem';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/Favorites.module.css';

type FavoritesGridProps = {
    mobileGrid: boolean;
    showMobileGrid: boolean;
    hideMobileFaves(): void;
}

export default function FavoritesGrid({mobileGrid, showMobileGrid, hideMobileFaves}: FavoritesGridProps) {
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavoriteState);

    useEffect(() => {
        const favoriteString: string | null = localStorage.getItem('currentFaves');
        const favoritesArray: [] = JSON.parse(favoriteString);

        if(!favoriteString) {
            localStorage.setItem('currentFaves', '[]');
        }

        dispatch(setFavoriteState(favoritesArray));
    }, []);

    return(
        <section className={styles['favorites-grid']} data-mobile={mobileGrid} data-show-grid={showMobileGrid}>
            <h3>Favorites</h3>
            {   favorites?.length ?
                favorites?.map((favorite) => (
                    <FavoritesItem issue={favorite.issue} title={favorite.title} imageSource={favorite.imageSource} id={favorite.id} key={favorite.id}/>
                )) :

                <h3>Don't be a grump, pick some favorites</h3>
            
            }
            {mobileGrid ? 
                <button 
                    className={styles["hide-button"]}
                    aria-label="hide favorites"
                    onClick={hideMobileFaves}
                    >
                    Hide Favorites
                    <FontAwesomeIcon icon={faBoltLightning} />  
                </button> :
                <span></span> 
            }
        </section>
    )
}