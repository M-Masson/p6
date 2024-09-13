const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({storage}).single('image')

module.exports =  (req, res, next)=>{
  upload(req, res, async(error)=>{
    if (error){
      return res.status(500).json({error: error.message});
    }
    if (req.file){
      const inputPath = req.file.path;
      const outputFileName = Date.now()+'-'+path.parse(req.file.originalname).name+ '.webp'
      const outputPath = path.join('images', outputFileName)

      try{
        await sharp(inputPath)
        .resize({width: 200})
        .toFormat('webp')
        .webp({quality: 80})
        .toFile(outputPath)

        await fs.promises.unlink(inputPath)

        req.file.path = outputPath
        req.file.filename = outputFileName
        next() 
      }
      catch (error){
        res.status(500).json({error})
      }
    }else{
      next()
    }
  })
}