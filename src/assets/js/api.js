import axios from 'axios'
const baseURL = 'https://api.unsplash.com';
var headers = {
    'Authorization': 'Bearer 300dcbe06d9ce3b7431f4003049daf7b2e04f3876ba5aa969e97e5c17cf943ce',
}
class API {
    constructor() {
        this.album = new AlbumAPI();
        this.profile = new ProfileAPI();
    }
}

class AlbumAPI {

    constructor() {
        this.xhr = axios.create({
            baseURL: baseURL + '/photos',
            headers: headers
        });
        this.photos = {};
    }

    listing(p = 1, n = 10) {
        /*
            p is requested page index
            n is number of items to be pulled
        */
        return new Promise((resolve, reject) => {
            this.xhr.get('/', {
                params: {
                    page: p,
                    per_page: n
                }
            })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(response);
                });
        });
    }

}

class ProfileAPI {
    constructor() {
        this.xhr = axios.create({
            baseURL: baseURL + '/users',
            headers: headers
        });
    }

    getProfile(username) {
        return new Promise((resolve, reject) => {
            this.xhr.get('/' + username)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(response);
                });
        });
    }
}

export default API;
