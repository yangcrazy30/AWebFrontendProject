import axios from 'axios'

axios.defaults.baseURL = 'http://jsfjyl.org.cn/sModel/MainServlet'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default {
  get: function (url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(response => {
        resolve(response.data)
      }).catch((error) => reject(error))
    })
  },

  post: function (url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data).then((response) => resolve(response.data)).catch((error) => reject(error))
    })
  },

  put: function (url, data) {
    return new Promise((resolve, reject) => {
      axios.put(url, data).then((response) => resolve(response.data)).catch((error) => reject(error))
    })
  },

  delete: function (url, params) {
    return new Promise((resolve, reject) => {
      axios.delete(url, params).then(response => {
        resolve(response.data)
      }).catch((error) => reject(error))
    })
  }
}
