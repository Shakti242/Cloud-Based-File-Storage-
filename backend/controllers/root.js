import {
  S3_PRESIGNED_PARAMS,
  DYNAMODB_PUT_PARAMS,
  DYNAMODB_GET_PARAMS,
} from '../constants/params.js';
import {
  SUCCESS_RESPONSE_OBJECT,
  FAIL_RESPONSE_OBJECT,
  ERROR_RESPONSE_OBJECT
} from '../constants/response.js';
import {
  S3,
  DYNAMODB_CLIENT
} from '../clients/index.js';
import { getFileNameFromImageUrl } from '../utils/index.js';

const addFile = async (req, res) => {
  const { email, file, uuid } = req.body;
  const s3Url = file;
  if (!file) {
    return res.status(200).json(FAIL_RESPONSE_OBJECT.INVALID_PARAMS);
  }

  try {
    DYNAMODB_PUT_PARAMS.Item.uuid = uuid;
    DYNAMODB_PUT_PARAMS.Item.image_url = s3Url;
    DYNAMODB_PUT_PARAMS.Item.email = email;

    await DYNAMODB_CLIENT.put(DYNAMODB_PUT_PARAMS).promise();
  } catch (err) {
    console.error(err);
    return res.status(500).json(ERROR_RESPONSE_OBJECT.DYNAMO_PUT);
  }

  return res.status(200).json(SUCCESS_RESPONSE_OBJECT.REKOGNITION);
};

const getPreSignedUrl = (s3Url) => {
  S3_PRESIGNED_PARAMS.Key = getFileNameFromImageUrl(s3Url);
  const s3PresignedUrl = S3.getSignedUrl('getObject', S3_PRESIGNED_PARAMS);

  return s3PresignedUrl;
};

const getImageMetaData = async (req, res) => {
  try {
    const result = await DYNAMODB_CLIENT.scan(DYNAMODB_GET_PARAMS).promise();

    const imagesMetaData = result.Items.map((item) => {
      return {
        ...item,
        image_url: getPreSignedUrl(item.image_url)
      };
    });

    res.status(200).json({
      imagesMetaData
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json(ERROR_RESPONSE_OBJECT.IMAGE_METADATA_GET);
  }
};

export { getImageMetaData, addFile };
