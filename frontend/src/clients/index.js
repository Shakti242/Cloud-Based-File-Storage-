import AWS from 'aws-sdk';
import { REGION } from '../constants';

const ACCESS_KEY_ID = 'AKIARDPGST2HCCQNSAUN';
const SECRET_ACCESS_KEY = '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';

AWS.config.update({
  region: REGION,
  credentials: new AWS.Credentials({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY
  })
});

export const S3 = new AWS.S3();

export const APIGATEWAY = new AWS.APIGateway({
  region: REGION
});
