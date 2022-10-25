import { ApiServiceUtil } from "./ApiService";
import { FileSerivceUtil } from "./FileService";

export default class AppUtils {
    constructor() {
        this.apiSerivce = ApiServiceUtil._apiServiceUtil;
        this.fileSerivce = FileSerivceUtil._fileServiceUtil;
    }
}