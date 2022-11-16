import { ComicDetails } from "./Comic";
import styles from '../styles/Comic.module.css';

const Detail = (props: ComicDetails) => {
    return (
        <ul className={styles["info-list"]}>
            <li className={styles["list-item"]}>
                <strong>Issue:</strong><span>{props.issue}</span>
                <strong>Published:</strong><span>{props.date}</span>
                <strong>Creators:</strong><span>{props.creators.join(',')}</span>
            </li>
        </ul>
    )
}

export default Detail;