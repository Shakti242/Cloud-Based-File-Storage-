import AWS from 'aws-sdk';
import { REGION } from '../constants/aws.js';

AWS.config.update({ region: REGION });

export const DYNAMODB_CLIENT = new AWS.DynamoDB.DocumentClient();

export const S3 = new AWS.S3({
  signatureVersion: 'v4',
  region: REGION
});
