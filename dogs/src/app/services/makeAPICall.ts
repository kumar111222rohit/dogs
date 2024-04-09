import { BASE_URL } from '../constants/genericConstants';
import {  RequestMethod, RequestOptions } from '../types/apiTypes';
import { generateErrorResponse } from '../utils/helper';

const apiHost = BASE_URL;

async function request(
  url: string,
  method: RequestMethod = 'GET'
): Promise<any> {
  const options: RequestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(apiHost + url, options);

    if (response.status !== 200) {
      return generateErrorResponse(
        'The server responded with an unexpected status.'
      );
    }

    const data = await response.json();
    

    return data;
  } catch (e) {
    console.log(e);
    // we can show error in some toast notifation can log in some logger as well here
  }
}

const get = (url: string): Promise<any> => {
  return request(url, 'GET');
};



export default {
  get
};
