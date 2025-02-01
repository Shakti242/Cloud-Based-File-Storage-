import { APIGATEWAY } from '../clients/index.js';

const memoize = (fn) => {
  const cache = {};
  return async (...args) => {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = await fn(...args);
    }
    return cache[key];
  };
};

const getApiKeyResponse = async ({ apiKey }) => {
  const data = await APIGATEWAY.getApiKey({
    apiKey,
    includeValue: true
  }).promise();

  return data.value;
};

export const memoizedGetApiKeyResponse = memoize(getApiKeyResponse);
