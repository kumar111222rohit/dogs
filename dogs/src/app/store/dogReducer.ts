import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dogs, DogsResponse } from "../types/dogs";

export interface TableState {
  loading: boolean;
  message: Dogs[];
}

export const initialState: TableState = {
  loading: false,
  message: [],
};

export const dogSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {
    addDogs: (state, action: PayloadAction<Dogs[]>) => {
      console.log(action.payload);
      state.message = [...state.message, ...action.payload];
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { addDogs, setLoader } = dogSlice.actions;

export default dogSlice.reducer;
