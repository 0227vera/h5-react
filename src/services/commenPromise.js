import axios from "axios"

const prefix = "{{projectContext}}"

export default function ({
  url = "",
  params = {},
  baseURL = prefix,
  ignoreNotice = false,
}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params, baseURL, ignoreNotice })
      .then(data => {
        data ? resolve(data) : reject(data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function axiosPostFactory(param = {}) {
  return new Promise((resolve, reject) => {
    param.method = param.method || "post"
    param.baseURL = param.baseURL || prefix
    axios(param)
      .then(data => {
        data ? resolve(data) : reject(data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
