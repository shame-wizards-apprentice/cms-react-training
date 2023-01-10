import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { comicSlice } from "./comicSlice";
import { filterSlice } from "./filterSlice";
import { statusSlice } from "./statusSlice";
import { favoriteSlice } from "./favoriteSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [comicSlice.name]: comicSlice.reducer,
      [filterSlice.name]: filterSlice.reducer,
      [statusSlice.name]: statusSlice.reducer,
      [favoriteSlice.name]: favoriteSlice.reducer
    },
    devTools: true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);