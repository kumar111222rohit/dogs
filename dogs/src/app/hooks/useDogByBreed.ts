import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import { setRandomDog } from '../store/dogReducer';
import { getDogsByBreed } from '../services/apiService';

export const useDogsByBreed = (breed:string) => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['getDogsByBreed'],
    queryFn: ()=>getDogsByBreed(breed),
  });

  // dispatch(setRandomDog(data));
  // here returning for our Charger Dashboard component,
  // we can also access from the redux store in the component
  return {
    dogsByBreedData: data,
    dogsByBreedDataLoading: isLoading,
    dogsByBreedDataIsError: isError,
    dogsByBreedDataError: error,
  };
};
