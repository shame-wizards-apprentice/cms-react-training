import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface FilterState {
    startCount: number,
    endCount: number;
    offset: number;
    total: number;
}

const initialState: FilterState = {
    startCount: 1,
    endCount: 15,
    offset: 0,
    total: 15
}

export const pagerSlice = createSlice({
    name: 'pager',
    initialState,
    reducers: {
        setStartCountState(state, action) {
            state.startCount = action.payload;
        },
        setEndCountState(state, action) {
            state.endCount = action.payload;
        },
        setOffsetState(state, action) {
            state.offset = action.payload;
        },
        setTotalState(state, action) {
            state.total = action.payload;
        },
        [HYDRATE]: (state, action) => {
            return{
                ...state,
                ...action.payload
            }
        }
    }
});

export const { setStartCountState, setEndCountState, setOffsetState, setTotalState } = pagerSlice.actions;
export const selectStartCountState = (state: AppState) => state.pager.startCount;
export const selectEndCountState = (state: AppState) => state.pager.endCount;
export const selectOffsetState = (state: AppState) => state.pager.offset;
export const selectTotalState = (state: AppState) => state.pager.total;
export default pagerSlice.reducer;