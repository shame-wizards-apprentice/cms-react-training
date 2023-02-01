import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectComicState, setComicState } from '../../store/comicSlice';
import { selectStatusState, setStatusState } from '../../store/statusSlice';
import { selectStartCountState, setStartCountState, selectEndCountState, setEndCountState, selectOffsetState, setOffsetState, selectTotalState, setTotalState } from '../../store/pagerSlice';
import { selectFilterNameState, setFilterNameState, selectFilterValueState, setFilterValueState } from '../../store/filterSlice';
import useMarvelData from '../../Hooks/useMarvelData';
import Comic from './Comic';
import Pager from './Pager';
import FilterBar from '../Filters/FilterBar';
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
    const filterName = useSelector(selectFilterNameState);
    const filterValue = useSelector(selectFilterValueState);


    // API query URLs
    const publicKey = 'a1886df29b985ffbd4c0fa6e0aaca37a';
    const baseURL = 'https://gateway.marvel.com/v1/public/comics?'
    const queryURL = `https://gateway.marvel.com/v1/public/${filterName}/${filterValue}/comics?orderBy=modified&limit=15&offset=0&apikey=${publicKey}`;

    // API callbacks
    const successCallback = (data: [], total: number) => {
        dispatch(setStatusState('Success'));
        dispatch(setComicState(data));
        dispatch(setTotalState(total));
    }
    
    const errorCallback = () => {
        dispatch(setStatusState('Error'));
        dispatch(setComicState([]));
    }

    // Pager functions
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

    // Filter update function
    function updateFilter(event: React.ChangeEvent) {
        const target = event.currentTarget as HTMLSelectElement;
        const value = target.value;

        dispatch(setFilterValueState(value.toString()));

        if(target.hasAttribute('data-character-filter')) {
            dispatch(setFilterNameState('characters'));
            document.querySelector('[data-creator-filter]')!.selectedIndex = 0;
        } else {
            dispatch(setFilterNameState('creators'));
            document.querySelector('[data-character-filter]')!.selectedIndex = 0;
        }
        useMarvelData(queryURL, successCallback, errorCallback);
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
                    <FilterBar 
                        updateFilter={updateFilter}/>
                    <section className={styles["comic-grid"]}>
                        {comics?.map((comic) => (
                                <Comic
                                    id={comic.id}
                                    title={comic.title}
                                    issue={comic.issueNumber}
                                    publishDate={comic.publishDate}
                                    creators={comic.creators.items.map((item) => item.name)}
                                    imageSource={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                    key={comic.id}
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