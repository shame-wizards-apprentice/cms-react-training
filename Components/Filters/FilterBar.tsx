import React from 'react';
import { selectFilterNameState, setFilterNameState, selectFilterValueState, setFilterValueState } from '../../store/filterSlice';
import { useDispatch, useSelector } from "react-redux";
import styles from '../../styles/Filter.module.css'

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

export default function FilterBar() {
    const dispatch = useDispatch();
    const filterName = useSelector(selectFilterNameState);
    const filterValue = useSelector(selectFilterValueState);

    function updateFilter(event: React.ChangeEvent) {
        const target = event.currentTarget as HTMLSelectElement;
        const value = target.value;

        if(!value) {
            dispatch(setFilterNameState(''));
            dispatch(setFilterValueState(''));
        } else {
            event.target.hasAttribute('data-character-filter') ? dispatch(setFilterNameState('character')) : dispatch(setFilterNameState('creator'));
            dispatch(setFilterValueState(value.toString()));
        }
    }

    return(
        <header className={styles['filter-bar']}>
            <span className={styles['filter-label']}>Filter by:</span>
            <select className={styles['filter-dropdown']} onChange={updateFilter}>
                <option value="">Character</option>
                {characterFilters.map((filter) => {
                    return(
                        <option value={filter.id} data-character-filter>{filter.name}</option>
                    )
                })}
            </select>

            <select className={styles['filter-dropdown']} onChange={updateFilter}>
                <option value="">Creator</option>
                {creatorFilters.map((filter) => {
                    return(
                        <option value={filter.id} data-creator-filter>{filter.name}</option>
                    )
                })}
            </select>
        </header>
    )

}
