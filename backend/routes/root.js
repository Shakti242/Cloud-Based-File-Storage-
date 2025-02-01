import express from 'express';
import { getImageMetaData, addFile } from '../controllers/root.js';

const router = express.Router();

router.post('/add-file', addFile);
router.get('/get-image-metadata', getImageMetaData);

export default router;
