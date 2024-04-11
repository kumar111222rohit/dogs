import { API_ROUTES } from '../constants/apiRoutes';
import { DOGS_IMAGE_LIMITER } from '../constants/genericConstants';
import APIClient from './makeAPICall';

const getDogsByBreed = async (breed: string) => {
  return APIClient.get(
    `${API_ROUTES.DOGS_BY_BREED}/${breed}${API_ROUTES.RANDOM_IMAGE}/${DOGS_IMAGE_LIMITER}`
  );
};
const getRandomDogs = async () => {
  return APIClient.get(API_ROUTES.RANDOM_BREEDS);
};

export { getRandomDogs, getDogsByBreed };
