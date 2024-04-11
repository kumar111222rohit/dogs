import { useDispatch } from "react-redux";

import { addDogs, setLoader } from "../store/dogReducer";
import { getDogsByBreed } from "../services/apiService";

export const useDogsByBreed = (breed: string) => {
  const dispatch = useDispatch();

  const loadData = async () => {
    dispatch(setLoader(true));
    const data = await getDogsByBreed(breed);
    if (data.message) {
      // dispatch(addDogs(data.message));
      setTimeout(() => {
        dispatch(setLoader(false));
      }, 2000);
      return data.message
    }
    dispatch(setLoader(false));
  };

  return {
    loadData,
  };
};
