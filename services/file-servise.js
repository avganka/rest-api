import * as uuid from 'uuid';
import * as path from 'path';
import fs from 'fs';

class FileService {
  saveFile(file) {
    try {   
      const extension = file.name.match(/\.([^.]+)$/)[1];     
      const fileName = uuid.v4() + "." + extension;      
      const filePath = path.resolve('static', fileName);
      file.mv(filePath);
      return fileName;
    } catch (error) {
      console.log(error);
    }
  }
  
  deleteFile(fileName) {
    try {
      const picture = path.resolve('static', fileName);
      fs.unlinkSync(picture);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new FileService();