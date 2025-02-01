#!/bin/bash

if [ -f main-lambda-deploy.zip ]; then
  echo "Removing existing zip..."
  rm main-lambda-deploy.zip
fi

echo "Creating main-lambda-deploy.zip..."

zip -r main-lambda-deploy.zip ./

echo "Deployment package created successfully!"
