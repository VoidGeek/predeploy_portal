const express = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");
const multer = require('multer');
const imageController = require('../controllers/imageController');
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define routes for image operations
router.post('/upload',[authJwt.verifyToken, authJwt.isAdmin] ,upload.single('image'), imageController.createImage);
router.get('/images', imageController.getImage);
router.get('/images/:s3Key', imageController.getImageById);
router.put('/images/:s3Key', [authJwt.verifyToken, authJwt.isAdmin], upload.single('image'),imageController.updatedImage);
router.delete('/images/:s3Key', [authJwt.verifyToken, authJwt.isAdmin],imageController.deleteImage);

module.exports = router;
