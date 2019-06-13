// 引入axios
import axios from 'axios'
// 生成一个axios实例
const http = axios.create()
// 3.设置http的默认选项,上线和开发的不同网址
http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://m.maoyan.com/ajax/movieOnInfoList?token=' : 'http://m.maoyan.com/ajax/movieOnInfoList?token=' // 基准URL地址
http.defaults.timeout = 10000 // 设置请求超时时间
// 4.做请求的拦截
// 5.做响应的拦截
http.interceptors.response.use(response => {
  return response.data
})
// 6.最后不要忘了暴露
export default http
// 使用方式
// http.get()
// http.post()
// http.delete()
