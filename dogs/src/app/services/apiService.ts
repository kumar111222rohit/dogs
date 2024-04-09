import { API_ROUTES } from '../constants/apiRoutes';
import APIClient from './makeAPICall';

const getDogsByBreed = async (breed: string) => {
  return APIClient.get(`${API_ROUTES.BREED}/${breed}${API_ROUTES.IMAGE}`);
};
const getRandomDogs = async () => {
  return APIClient.get(API_ROUTES.RANDOM_BREEDS);
};

export {
  getRandomDogs,
  getDogsByBreed
};
