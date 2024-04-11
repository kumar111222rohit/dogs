import { configureStore } from "@reduxjs/toolkit";
import dogReducer from "./dogReducer";
import { useDispatch } from "react-redux";

export const dogStore = configureStore({
  reducer: {
    dogs: dogReducer,
  },
});
export type AppDispatch = typeof dogStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof dogStore.getState>;
