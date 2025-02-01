import React, { useState, useContext, useEffect } from 'react';
import { TextField, Button, ButtonBase, Avatar } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { v4 as uuidv4 } from 'uuid';

import useStyles from './Upload.styles';
import { AppContext } from '../../context';
import { callAddFileAPI } from '../../api/crud.js';
import { Loader, Toast } from '../../components';
import { STATUS_TOAST_MAP } from '../../constants';
import { S3 } from '../../clients';

const Upload = () => {
  const { setAppContext } = useContext(AppContext);
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    type: null,
    message: null
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    setAppContext({
      buttonRoute: '/gallery',
      buttonTitle: 'View Gallery'
    });
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async () => {
    setLoading(true);

    const url = await handleUpload();

    const { status, message } = await callAddFileAPI(url, 'i5han3@gmail.com');

    setToast({
      type: STATUS_TOAST_MAP[status],
      message
    });

    setImage(null);

    setLoading(false);
  };

  const handleUpload = async () => {
    if (image) {
      const uuid1 = uuidv4();

      const fileExtension = image.name.split('.').pop();

      const fileName = `${image.name}-${uuid1}.${fileExtension}`;

      try {
        const uploadParams = {
          Bucket: 'storage-bucket-project',
          Key: fileName,
          Body: image,
          ContentType: image.type
        };

        const uploadResult = await S3.upload(uploadParams).promise();

        if (uploadResult && uploadResult.Location) {
          return uploadResult.Location;
        } else {
          console.error('Error uploading image to S3.');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const isSubmitButtonDisabled = !image;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.imageSelectorContainer}>
          <ButtonBase className={classes.imageSelector} component="label">
            {image ? (
              <img
                className={classes.image}
                src={URL.createObjectURL(image)}
                alt="Selected"
              />
            ) : (
              <Avatar className={classes.avatar}>
                <PhotoCameraIcon fontSize="large" />
              </Avatar>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className={classes.imageInput}
            />
          </ButtonBase>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={isSubmitButtonDisabled}
        >
          Submit
        </Button>
      </div>
      <Toast toast={toast} />
      {loading ? <Loader loading={loading} /> : null}
    </div>
  );
};

export default Upload;
