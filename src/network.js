import axios from 'axios'
// import axiosRetry from 'axios-retry'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 3000
// 设置网络重试次数为3次
// axiosRetry(axios, { retries: 3 })

// 这里写成async的目的，是想让上层不用去处理promise的then，也不需要传callback下来
// 上层只需要用调用同步方法的方式拿到返回值去处理
export async function requestSync (url, { method = 'get', params = {} } = {}) {
  // get和post不同，get是把参数带在链接后面，post是请求体
  // 所以get参数是配在params里面，post参数是配在data里面
  const aaa = method === 'get' ? 'params' : 'data'
  try {
    const response = await axios.request({ url, method, [aaa]: params })
    console.log(JSON.stringify(response))
    return response // 返回值待处理，处理之后再返给上层
  } catch (error) {
    console.log(JSON.stringify(error))
    return error // 错误待处理，处理之后再把需要的返给上层
  }
}

// 有些时候我们需要不阻塞发起网络请求的代码之后的代码，给上层一种then，catch的方式获取网络返回值
export function requestAsync (url, { method = 'get', params = {} } = {}) {
  // get和post不同，get是把参数带在链接后面，post是请求体
  // 所以get参数是配在params里面，post参数是配在data里面
  const aaa = method === 'get' ? 'params' : 'data'
  return axios.request({ url, method, [aaa]: params }).then(function (response) {
    console.log(response)
    return response // 返回值待处理，处理之后再返给上层
  }).catch(function (error) {
    console.log(JSON.stringify(error))
    throw error
  })
}
