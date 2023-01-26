import React, {useEffect} from "react";
import Image from "next/image";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteState, setFavoriteState } from '../../store/favoriteSlice';
import { selectComicState, setComicState } from '../../store/comicSlice';
import Button from './Button';
import Detail from './Detail';
import styles from '../../styles/Comic.module.css';

export interface ComicDetails {
    issue: number;
    publishDate: string;
    creators: string[];
}

export interface ComicProps extends ComicDetails {
    id: number;
    title: string;
    imageSource: string;
}

const Comic = ({issue, publishDate, creators, id, title, imageSource}: ComicProps) => {
    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();
    const favorites = useSelector(selectFavoriteState);

    useEffect(() => {
        favorites.map(fave => {
            if(fave.id === id) {
                setSaved(true);
            }
        })
    }, [favorites])
    
    const handleFave = () => {
        if(saved) {
            setSaved(false)
            const newFavorites = favorites.filter (favorite => favorite.id != id);
            dispatch(setFavoriteState(newFavorites));
            localStorage.setItem('currentFaves', JSON.stringify(newFavorites)); 
        } else {
            if(favorites?.length < 10) {
                setSaved(true)
                const newFaves = favorites.concat({
                    issue: issue,
                    id: id,
                    title: title,
                    imageSource: imageSource
                });
    
                dispatch(setFavoriteState(newFaves));
                localStorage.setItem('currentFaves', JSON.stringify(favorites));
            }
        }
    }

    return (
        <article className={styles["comic"]} data-saved={saved}>
            <div className={styles["img-cont"]}>
                <Image
                    src={imageSource}
                    alt={`${title} cover photo`}
                    fill
                />
                <Button id={id} onClick={handleFave} />
            </div>
            <div className={styles["info-section"]}>
                <h3 className={styles["comic-title"]}>{title}</h3>
                <Detail issue={issue} publishDate={publishDate} creators={creators} />
            </div>
        </article>
    )
}

export default Comic;