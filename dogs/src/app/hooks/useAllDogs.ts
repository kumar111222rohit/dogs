import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import { setRandomDog } from '../store/dogReducer';
import { getRandomDogs } from '../services/apiService';

export const useAllDogs = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['getRandomDogs'],
    queryFn: getRandomDogs,
  });

  dispatch(setRandomDog(data));
  // here returning for our Charger Dashboard component,
  // we can also access from the redux store in the component
  return {
    dogsData: data,
    dogsDataLoading: isLoading,
    dogsDataIsError: isError,
    dogsDataError: error,
  };
};
