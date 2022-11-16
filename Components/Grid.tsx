import React from 'react';
import { useState } from 'react';
import Comic from './Comic';
import data from '../Hooks/comicData';
import styles from '../styles/Comic.module.css';

const ComicGrid = () => {
    const [comics, setComics] = useState(data[0]);

    return (
        <section className={styles["comic-grid"]}>
            {comics.map((comic) => {
                return (
                    <Comic
                        id={comic.id}
                        title={comic.title}
                        issue={comic.issueNumber}
                        date={comic.publishDate}
                        creators={comic.creators.map((creator) => creator.name.split(' ')[1])}
                        imageSource={comic.thumbnail}
                    />
                )
            })}
        </section>
    )
}

export default ComicGrid;