import { AppConst } from '../config/AppConst';

class FileService {
    constructor() {
        this.sizeMax = 6250000;
        this.stringExt =
            'image.png|image.jpeg|image.gif|video/mp4|application.*pdf';
    }

    getFile(file) {
        if (!this.checkSize(file)) return 'size';
        if (!this.checkExtensions(file)) return 'ext';
        return {
            name: file.name,
            url: URL.createObjectURL(file)
        };
    }

    checkSize(file) {
        return file.size < this.sizeMax;
    }

    checkExtensions(file) {
        return file.type.match(this.stringExt) !== null;
    }

    // Function Check Ext is img
    isImg(ext){
        if (AppConst.arrayIsFileImg.includes(ext)) {
            return true;
        }else{
            return false;
        }
    }
}

export const FileSerivceUtil = {
    _fileServiceUtil: new FileService()
}