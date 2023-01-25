import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectComicState, setComicState } from '../../store/comicSlice';
import { selectStatusState, setStatusState } from '../../store/statusSlice';
import { selectStartCountState, setStartCountState, selectEndCountState, setEndCountState, selectOffsetState, setOffsetState, selectTotalState, setTotalState } from '../../store/pagerSlice';
import useMarvelData from '../../Hooks/useMarvelData';
import Comic from './Comic';
import Pager from './Pager';
import styles from '../../styles/Comic.module.css';

const ComicGrid = () => {
    const limit = 15;
    const dispatch = useDispatch();

    const status = useSelector(selectStatusState);
    const comics = useSelector(selectComicState);
    let startCount = useSelector(selectStartCountState);
    let endCount = useSelector(selectEndCountState);
    const total = useSelector(selectTotalState);
    let offset = useSelector(selectOffsetState);

    const publicKey = 'a1886df29b985ffbd4c0fa6e0aaca37a';
    const baseURL = 'https://gateway.marvel.com/v1/public/comics?'

    const successCallback = (data: [], total: number) => {
        dispatch(setStatusState('Success'));
        dispatch(setComicState(data));
        dispatch(setTotalState(total));
    }
    
    const errorCallback = () => {
        dispatch(setStatusState('Error'));
        dispatch(setComicState([]));
    }

    const handleNextClick = () => {
        if(endCount < total) {
            dispatch(setStartCountState(startCount+limit))
            dispatch(setEndCountState(endCount+limit));
            dispatch(setOffsetState(offset+limit));
    
            useMarvelData(`${baseURL}orderBy=modified&limit=${limit}&offset=${offset+limit}&apikey=${publicKey}`, successCallback, errorCallback);
        }
    }

    const handlePrevClick = () => {
        if(offset) {
            dispatch(setStartCountState(startCount-limit))
            dispatch(setEndCountState(endCount-limit));
            dispatch(setOffsetState(offset-limit));

            useMarvelData(`${baseURL}orderBy=modified&limit=${limit}&offset=${offset-limit}&apikey=${publicKey}`, successCallback, errorCallback);
        }
    }

    useEffect(() => {
        setStartCountState(startCount);
        setEndCountState(limit);

        useMarvelData(`${baseURL}orderBy=modified&limit=${limit}&offset=${offset}&apikey=${publicKey}`, successCallback, errorCallback);
    }, []);

    switch(status) {
        case 'Loading':
            return (<h1>Comics are loading as fast as a speeding bullet!</h1>)
            break;
        case 'Success':
            return(
                <section className={styles["main-content"]}>
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
                        <Pager
                            nextHandler={handleNextClick}
                            prevHandler={handlePrevClick}
                            startCount={startCount}
                            endCount={endCount}
                            total={total} 
                        />
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