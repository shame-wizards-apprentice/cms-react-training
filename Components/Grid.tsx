import React from 'react';
import { useState, useEffect } from 'react';
import useMarvelData from '../Hooks/useMarvelData';
import Comic from './Comic';
import styles from '../styles/Comic.module.css';

const publicKey = '982f779d521336d1db76893b0b279c1e';

const queryUrl = `https://gateway.marvel.com/v1/public/comics?apikey=${publicKey}`;

const ComicGrid = () => {
    const [status, setStatus] = useState('Loading');
    const [comics, setComics] = useState([]);

    const successCallback = (data: []) => {
        setStatus('Success');
        setComics(data);
    }

    const errorCallback = () => {
        setStatus('Error');
        setComics([]);
    }

    useEffect(() => {
        useMarvelData(queryUrl, successCallback, errorCallback);
    }, [status]);

    switch(status) {
        case 'Loading':
            return (<h1>Comics are loading as fast as a speeding bullet!</h1>)
            break;
        case 'Success':
            return(
                <section className={styles["comic-grid"]}>
                    {comics?.map((comic) => {
                        return (
                            <Comic
                                id={comic.id}
                                title={comic.title}
                                issue={comic.issueNumber}
                                publishDate={comic.publishDate}
                                creators={comic.creators.items.map((item) => item.name)}
                                imageSource={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                            />
                        )
                    })}
                </section>
            )
            break;
        case 'Error': 
            return(<h1>You fool! You broke it!</h1>)
            break;
        default:
            return (<h1>Comics are loading as fast as a speeding bullet!</h1>)
    }

}

export default ComicGrid;