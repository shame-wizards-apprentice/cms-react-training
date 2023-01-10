import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface ComicState {
    comicState: []
}

const initialState: ComicState = {
    comicState: []
}

export const comicSlice = createSlice({
    name: 'comics',
    initialState,
    reducers: {
        setComicState(state, action) {
            state.comicState = action.payload;
        },
        [HYDRATE]: (state, action) => {
            return{
                ...state,
                ...action.payload
            }
        }
    }
});


export const { setComicState } = comicSlice.actions;
export const selectComicState = (state: AppState) => state.comics.comicState;
export default comicSlice.reducer;