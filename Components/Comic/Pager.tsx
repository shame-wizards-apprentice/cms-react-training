import React from 'react';
import styles from '../../styles/Comic.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

type pagerProps = {
    nextHandler(): void;
    prevHandler(): void;
    startCount: number;
    endCount: number;
    total: number;
}

export default function Pager({nextHandler, prevHandler, startCount, endCount, total}: pagerProps) {

    return(
        <aside className={styles["pager-cont"]}>
            <nav className={styles["pager"]}>
                <ul>
                    <li>
                        <button 
                            className={styles["prev-arrow"]} 
                            onClick={prevHandler}
                            aria-label='Go to previous page'
                        >
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                    </li>
                    <li>
                        <span>{startCount}-{endCount} of {total}</span>
                    </li>
                    <li>
                        <button 
                            className={styles["next-arrow"]} 
                            onClick={nextHandler}
                            aria-label='Go to next page'
                        >
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}