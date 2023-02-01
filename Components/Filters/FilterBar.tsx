import React, { useState, useEffect, useCallback } from 'react';
import FavoritesGrid from '../Comic/FavoritesGrid';
import styles from '../../styles/Filter.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const breakpoint = 1024;
const resizeEvents = ["resize", "orientationchange"]

const characterFilters = [
    {
        name: "Iron Man",
        id: 1009368,
    },
    {
        name: "Captain America",
        id: 1009220,
    },
    {
        name: "Thor",
        id: 1009664,
    },
    {
        name: "Deadpool",
        id: 1009268,
    },
    {
        name: "Scarlet Witch",
        id: 1009562,
    },
    {
        name: "Black Widow",
        id: 1009189,
    },
    {
        name: "Wasp",
        id: 1009707,
    },
    {
        name: "Gamora",
        id: 1010763,
    },
];

const creatorFilters = [
    {
        name: "Kate Leth",
        id: 12787,
    },
    {
        name: "Brian Michael Bendis",
        id: 24,
    },
    {
        name: "Stan Lee",
        id: 30,
    },
    {
        name: "Steve Ditko",
        id: 32,
    },
    {
        name: "Jack Kirby",
        id: 196,
    },
];

type filterBarProps = {
    updateFilter(event: React.ChangeEvent): void;
}

export default function FilterBar({updateFilter}: filterBarProps) {
    const [mobile, setMobile] = useState(true);
    const [open, setOpen] = useState(false);
    const [showFaves, setShowFaves] = useState(false);

    const handleResize = useCallback(() => {
      window.innerWidth >= breakpoint ?
      setMobile(false) :
      setMobile(true)
    }, [])
  
    useEffect(() => {
      handleResize();
  
      resizeEvents.forEach((e) => window.addEventListener(e, handleResize));
    }, [handleResize])

    const toggleMobileFilters = () => {
        setOpen(!open);
    }

    const toggleMobileFaves = () => {
        setShowFaves(!showFaves);
    }

    return(
        <header className={styles['filter-bar']}>
            {mobile ? 
                <div className={styles["mobile-button-cont"]}>
                    <button
                        className={styles["filter-button"]}
                        aria-label="show/hide filters"
                        onClick={toggleMobileFilters}
                    >
                        Filter
                        <FontAwesomeIcon icon={faFilter} />
                    </button>
                    <button 
                        className={styles["favorites-button"]}
                        aria-label="show/hide filters"
                        onClick={toggleMobileFaves}
                    >
                        {showFaves ? 'Hide Favorites' : 'Show Favorites'}
                        <FontAwesomeIcon icon={faBoltLightning} />  
                    </button>
                </div> :
                <span className={styles['filter-label']}>Filter by:</span>
            }
            <select aria-hidden={open} className={styles['filter-dropdown']} data-character-filter onChange={updateFilter}>
                <option value="">Character</option>
                {characterFilters.map((filter) => {
                    return(
                        <option value={filter.id} key={filter.id}>{filter.name}</option>
                    )
                })}
            </select>

            <select aria-hidden={open} className={styles['filter-dropdown']} data-creator-filter onChange={updateFilter}>
                <option value="">Creator</option>
                {creatorFilters.map((filter) => {
                    return(
                        <option value={filter.id} key={filter.id} data-creator-filter>{filter.name}</option>
                    )
                })}
            </select>
            <FavoritesGrid mobileGrid={true} showMobileGrid={showFaves} hideMobileFaves={toggleMobileFaves}/>
        </header>
    )

}
