import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  Dogs } from '../types/dogs';

export interface TableState {
  loading: boolean;
  data: Dogs[];

}

export const initialState: TableState = {
  loading: false,
  data: [],
 
};

export const dogSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    
    setRandomDog: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
    
   
  },
});

export const {
  setRandomDog,

} = dogSlice.actions;

export default dogSlice.reducer;
