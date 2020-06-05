import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://api.duyiedu.com'
})

instance.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    appkey: 'duyi_buyi_1572767449855'
  }
  return config
}, err => Promise.reject(err))

export default instance
