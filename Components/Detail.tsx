import moment from "moment/moment";
import { ComicDetails } from "./Comic";
import styles from '../styles/Comic.module.css';

const Detail = ({issue, publishDate, creators}: ComicDetails) => {
    const displayDate = (date: string) => {
        return moment(date).format("MMMM Do, YYYY");
    }

    return (
        <ul className={styles["info-list"]}>
            <li className={styles["list-item"]}>
                <strong>Issue:</strong><span>{issue}</span>
            </li>
            <li>
                <strong>Published:</strong><span>{displayDate(publishDate)}</span>
            </li>
            <li>
                <strong>Creators:</strong><span>{creators.join(',')}</span>
            </li>
        </ul>
    )
}

export default Detail;