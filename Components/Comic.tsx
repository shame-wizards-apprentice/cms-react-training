import React from "react";
import Image from "next/image";
import {useState} from "react";
import Button from './Button';
import Detail from './Detail';
import styles from '../styles/Comic.module.css';

export interface ComicDetails {
    issue: number;
    date: string;
    creators: string[];
}

export interface ComicProps extends ComicDetails {
    id: number;
    title: string;
    imageSource: string;
}

const months = [
    "January", 
    "February",
    "March",
    "April",
    "May",
    "June",
    "July", 
    "August", 
    "September",
    "October",
    "November", 
    "December",
]

const Comic = (props: ComicProps) => {
    const [saved, setSaved] = useState(false);
    const publishDate = new Date(props.date);
    const displayDate = `${months[publishDate.getMonth()]} ${publishDate.getDate()}, ${publishDate.getFullYear()}`

    const handleButtonClick = () => {
        setSaved(saved ? false : true); 
    }

    return (
        <article className={styles["comic"]}>
            <div className={styles["img-cont"]}>
                <Image
                    src={props.imageSource}
                    alt={`${props.title} cover photo`}
                    fill
                />
            </div>
            <Button id={props.id} title={props.title} saved={saved} onClick={handleButtonClick} />
            <h3 className={styles["comic-title"]}>{props.title}</h3>
            <Detail issue={props.issue} date={displayDate} creators={props.creators} />
        </article>
    )
}

export default Comic;