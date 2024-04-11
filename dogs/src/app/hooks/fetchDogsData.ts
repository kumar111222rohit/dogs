import { getDogsByBreed, getRandomDogs } from '../services/apiService';
import { toast } from 'react-toastify';

export const fetchDogsData = () => {
  const fetchDogsByBreed = async (breed: string) => {
    try {
      const data = await getDogsByBreed(breed);
      if (data.message) {
        return data.message;
      }
      return [];
    } catch (err) {
      toast.error('Error in fetching dog data');
    }
  };

  const fetchRandomDogs = async () => {
    try {
      const data = await getRandomDogs();
      if (data.message) {
        return data.message;
      }
      return [];
    } catch (err) {
      toast.error('Error in fetching dog data');
    }
  };

  return {
    fetchDogsByBreed,
    fetchRandomDogs,
  };
};
