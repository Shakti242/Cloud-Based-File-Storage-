import AWS from 'aws-sdk';
import { REGION } from '../constants';

const ACCESS_KEY_ID = '';
const SECRET_ACCESS_KEY =

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
