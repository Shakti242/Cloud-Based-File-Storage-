import { basename } from 'path';

export const getFileNameFromImageUrl = (imageUrl) => {
  const fileName = basename(imageUrl);

  const cleanFileName = fileName.split('?')[0].split('#')[0];

  return cleanFileName;
};
