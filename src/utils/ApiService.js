// import axios
import axios from 'axios'

class ApiSerivce {
    ROOT_API = 'http://192.168.56.1:80';

    authHeader() {
        let user = JSON.parse(localStorage.getItem('user'));
        let headers = {
            Accept: 'application/json'
        };
        if (user && user.token) {
            headers.Authorization = 'Bearer ' + user.token;
        }
        return headers;
    }

    get(api) {
        return axios
            .get(this.ROOT_API + api, {
                headers: this.authHeader()
            })
            .then(res => {
                return res.data;
            })
            .catch(err => {
                console.log(err);
            });
    }

    post(api, data) {
        console.log(this.ROOT_API + api);
        return axios
            .post(this.ROOT_API + api, data, {
                headers: this.authHeader()
            })
            .then(res => {
                return res.data;
            })
            .catch(err => {
                console.log(err);
            });
    }

    put(api, data) {
        console.log(api);
        return axios
            .put(this.ROOT_API + api, data, {
                headers: this.authHeader()
            })
            .then(res => {
                return res.data;
            })
            .catch(err => {
                console.log(err);
            });
    }

    postFile(api, data, progressUpload = null) {
        console.log(api);
        return axios
            .post(this.ROOT_API + api, data, {
                headers: this.authHeader(),
                onUploadProgress: progressEvent => {
                    let percentCompleted = Math.floor(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    if(progressUpload) progressUpload(percentCompleted);
                    console.log('Upload percent: ' + percentCompleted);
                }
            })
            .then(res => {
                return res.data;
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const ApiServiceUtil = {
    _apiServiceUtil: new ApiSerivce()
}