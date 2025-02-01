import { S3_BUCKET_NAME, DYNAMODB_TABLE_NAME } from '../constants/aws.js';

export const DYNAMODB_PUT_PARAMS = {
  TableName: DYNAMODB_TABLE_NAME,
  Item: {
    uuid: null,
    image_url: null,
    email: null
  }
};

export const DYNAMODB_GET_PARAMS = {
  TableName: DYNAMODB_TABLE_NAME
};

export const S3_PRESIGNED_PARAMS = {
  Bucket: S3_BUCKET_NAME,
  Key: null,
  Expires: 3600
};