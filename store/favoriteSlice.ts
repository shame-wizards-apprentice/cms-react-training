import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface FavoriteState {
    favoriteState: []
}

const initialState: FavoriteState = {
    favoriteState: []
}

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavoriteState(state, action) {
            state.favoriteState = action.payload;
        },
        [HYDRATE]: (state, action) => {
            return{
                ...state,
                ...action.payload
            }
        }
    }
});

export const { setFavoriteState } = favoriteSlice.actions;
export const selectFavoriteState = (state: AppState) => state.favorites.favoriteState;
export default favoriteSlice.reducer;