import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface FilterState {
    filterName: string,
    filterValue: string;
}

const initialState: FilterState = {
    filterName: '',
    filterValue: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterNameState(state, action) {
            state.filterName = action.payload;
        },
        setFilterValueState(state, action) {
            state.filterValue = action.payload;
        },
        [HYDRATE]: (state, action) => {
            return{
                ...state,
                ...action.payload
            }
        }
    }
});

export const { setFilterNameState, setFilterValueState } = filterSlice.actions;
export const selectFilterNameState = (state: AppState) => state.filter.filterName;
export const selectFilterValueState = (state: AppState) => state.filter.filterValue;
export default filterSlice.reducer;