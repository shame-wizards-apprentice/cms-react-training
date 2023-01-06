import React from "react";
import Image from "next/image";
import {useState} from "react";
import Button from './Button';
import Detail from './Detail';
import styles from '../styles/Comic.module.css';

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

    const handleButtonClick = () => {
        setSaved(saved ? false : true); 
    }

    return (
        <article className={styles["comic"]}>
            <div className={styles["img-cont"]}>
                <Image
                    src={imageSource}
                    alt={`${title} cover photo`}
                    fill
                />
            </div>
            <Button id={id} saved={saved} onClick={handleButtonClick} />
            <h3 className={styles["comic-title"]}>{title}</h3>
            <Detail issue={issue} publishDate={publishDate} creators={creators} />
        </article>
    )
}

export default Comic;