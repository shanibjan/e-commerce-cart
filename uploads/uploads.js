import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../cloudinary/cloudinaryConfig.js'; 

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'ecommerce-images', 
    
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
  },
});

const upload = multer({ storage });

export default upload;
