import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/Comic.module.css';

type ButtonProps = {
    id: number;
    onClick(): void;
}

const Button = ({id, onClick}: ButtonProps) => {
    return (
        <button
            className={styles["favorite-button"]}
            data-id={id}
            onClick={onClick}
            aria-label = 'Save to favorites'
        >
            <FontAwesomeIcon icon={faBoltLightning} />
        </button>
    )
}

export default Button;