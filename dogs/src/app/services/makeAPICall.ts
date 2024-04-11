'use client';
import { BASE_URL } from '../constants/genericConstants';
import { RequestMethod, RequestOptions } from '../types/apiTypes';
import { toast } from 'react-toastify';

const apiHost = BASE_URL;

async function request(
  url: string,
  method: RequestMethod = 'GET'
): Promise<any> {
  const options: RequestOptions = {
    method,
  };
  try {
    const response = await fetch(apiHost + url, options);
    const data = await response.json();

    if (data.code === 404) {
      toast.warning(data.message, { autoClose: 2000 });
      return [];
    }
    toast.success('Dogs data loaded', { autoClose: 2000 });
    return data;
  } catch (err) {
    console.log(err);
    toast.error(`Unable to load dogs data because ${err}`);
  }
}

const get = (url: string): Promise<any> => {
  return request(url, 'GET');
};

export default {
  get,
};
