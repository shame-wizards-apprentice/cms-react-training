import React from "react";
import Image from "next/image";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteState, setFavoriteState } from '../../store/favoriteSlice';
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

    const handleFave = () => {
        setSaved(saved ? false : true); 
        if(favorites?.length < 10) {
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

    return (
        <article className={styles["comic"]}>
            <div className={styles["img-cont"]}>
                <Image
                    src={imageSource}
                    alt={`${title} cover photo`}
                    fill
                />
                <Button id={id} onClick={handleFave} />
            </div>
            <h3 className={styles["comic-title"]}>{title}</h3>
            <Detail issue={issue} publishDate={publishDate} creators={creators} />
        </article>
    )
}

export default Comic;