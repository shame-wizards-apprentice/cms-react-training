import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface StatusState {
    statusState: string;
}

const initialState: StatusState = {
    statusState: 'Loading'
}

export const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        setStatusState(state, action) {
            state.statusState = action.payload;
        },
        [HYDRATE]: (state, action) => {
            return{
                ...state,
                ...action.payload
            }
        }
    }
});

export const { setStatusState } = statusSlice.actions;
export const selectStatusState = (state: AppState) => state.status.statusState;
export default statusSlice.reducer;