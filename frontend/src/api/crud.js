import axios from 'axios';
import { memoizedGetApiKeyResponse } from '../utils';
import { API_GATEWAY_ENDPOINT, API_GATEWAY_KEY_ID } from '../constants';

const callAddFileAPI = async (url, email) => {
  try {
    const data = {
      file: url,
      email: email
    };
    const API_KEY = await memoizedGetApiKeyResponse({
      apiKey: API_GATEWAY_KEY_ID
    });

    const response = await axios.post(
      `${API_GATEWAY_ENDPOINT}/api/add-file`,
      data,
      {
        headers: {
          'x-api-key': API_KEY
        }
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

const getImageMetadataAPI = async () => {
  try {
    const API_KEY = await memoizedGetApiKeyResponse({
      apiKey: API_GATEWAY_KEY_ID
    });

    const response = await axios.get(
      `${API_GATEWAY_ENDPOINT}/api/get-image-metadata`,
      {
        headers: {
          'x-api-key': API_KEY
        }
      }
    );

    return response.data.imagesMetaData;
  } catch (error) {
    throw error;
  }
};

export { callAddFileAPI, getImageMetadataAPI };
