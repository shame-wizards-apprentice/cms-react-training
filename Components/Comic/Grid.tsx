import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectComicState, setComicState } from '../../store/comicSlice';
import { selectStatusState, setStatusState } from '../../store/statusSlice';
import useMarvelData from '../../Hooks/useMarvelData';
import Comic from './Comic';
import styles from '../../styles/Comic.module.css';

const ComicGrid = () => {
    const dispatch = useDispatch();

    const status = useSelector(selectStatusState);
    const comics = useSelector(selectComicState);

    const publicKey = 'a1886df29b985ffbd4c0fa6e0aaca37a';
    const queryUrl = `https://gateway.marvel.com/v1/public/comics?apikey=${publicKey}`;

    const successCallback = (data: []) => {
        dispatch(setStatusState('Success'));
        dispatch(setComicState(data));
    }
    
    const errorCallback = () => {
        dispatch(setStatusState('Error'));
        dispatch(setComicState([]));
    }

    useEffect(() => {
        useMarvelData(queryUrl, successCallback, errorCallback);
    }, []);

    switch(status) {
        case 'Loading':
            return (<h1>Comics are loading as fast as a speeding bullet!</h1>)
            break;
        case 'Success':
            return(
                <section className={styles["comic-grid"]}>
                    {comics?.map((comic) => (
                            <Comic
                                id={comic.id}
                                title={comic.title}
                                issue={comic.issueNumber}
                                publishDate={comic.publishDate}
                                creators={comic.creators.items.map((item) => item.name)}
                                imageSource={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                            />
                    ))}
                </section>
            )
            break;
        case 'Error': 
            return(<h1>You fool! Your actions have put the final Infinity Stone in the hands of Thanos himself....or whatever. I wasn't hired for my Marvel trivia knowledge.</h1>)
            break;
        default:
            return (<h1>Comics are loading as fast as a speeding bullet!</h1>)
    }

}

export default ComicGrid;