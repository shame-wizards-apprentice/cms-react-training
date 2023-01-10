import moment from "moment/moment";
import { ComicDetails } from "./Comic";
import styles from '../../styles/Comic.module.css';

const Detail = ({issue, publishDate, creators}: ComicDetails) => {
    const displayDate = (date: string) => {
        return moment(date).format("MMMM Do, YYYY");
    }

    return (
        <ul className={styles["info-list"]}>
            <li className={styles["list-item"]} data-testid="issue-number">
                <strong>Issue:</strong><span>{issue}</span>
            </li>
            <li className={styles["list-item"]} data-testid="publish-date">
                <strong>Published:</strong><span>{displayDate(publishDate)}</span>
            </li>
            <li className={styles["list-item"]} data-testid="creators-list">
                <strong>Creators:</strong><span>{creators.join(', ')}</span>
            </li>
        </ul>
    )
}

export default Detail;