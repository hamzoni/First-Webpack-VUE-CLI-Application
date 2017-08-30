import axios from 'axios'
import config from 'config'
const baseURL = 'https://api.unsplash.com'

var headers = {
  'Authorization': 'Bearer ' + config.unsplashKey
}

class API {
  constructor () {
    this.album = new AlbumAPI()
    this.profile = new ProfileAPI()
  }
}

class AlbumAPI {
  constructor () {
    this.xhr = axios.create({
      baseURL: baseURL + '/photos',
      headers: headers
    })
    this.photos = {}
  }

  listing (p = 1, n = 10) {
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
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

class ProfileAPI {
  constructor () {
    this.xhr = axios.create({
      baseURL: baseURL + '/users',
      headers: headers
    })
  }
  getProfile (username) {
    return new Promise((resolve, reject) => {
      this.xhr.get('/' + username)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default API
