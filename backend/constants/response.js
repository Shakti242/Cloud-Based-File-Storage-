export const SUCCESS_RESPONSE_OBJECT = {
  REKOGNITION: {
    status: 'Success',
    message:
      "Awesome! Your image is now in the Gallery and accessible worldwide. We've recognized the labels. Search your images in Gallery using labels or your email. Enjoy exploring your beautiful moments in the Gallery!"
  }
};

export const FAIL_RESPONSE_OBJECT = {
  INVALID_PARAMS: {
    status: 'Fail',
    message: 'Invalid Input Params'
  },
};

export const ERROR_RESPONSE_OBJECT = {
  DYNAMO_PUT: {
    status: 'Error',
    message: 'Something went wrong while storing data in DynamoDB.'
  },
  IMAGE_METADATA_GET: {
    status: 'Error',
    message: 'Something went wrong while accessing data from DynamoDB.'
  }
};
