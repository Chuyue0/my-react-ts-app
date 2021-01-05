/**
 * axios公用请求
 * 构造函数
 * 
 * 使用方式：
 * import req from 'libs/requests.js'
 * req.request({url:'',method:'post'})
 */
import axios from 'axios'
import { object } from 'prop-types';
class Requests {
    constructor() {
        // 公用参数
        this.baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/';
        this.timeout = 6000
        this.queue = {} // 存放每次请求队列
    }
    merge(options) {
        // 自定义方法，合并参数
        return {
            ...options,
            baseUrl: this.baseUrl,
            timeout: this.timeout
        }
    }
    // 自定义拦截器
    setInterceptor(instance) {
        // 自定义请求头
        instance.interceptors.request.use(config => {
            config.headers.Authorization = 'token';
            if(Object.keys(this.queue).length===0){
                // show loading
            }
            this.queue[url]=url;
            return config;
        })
        instance.interceptors.response.use(res => {
            // 成功后删除请求队列url
            delete this.queue[url];
            if(Object.keys(this.queue).length===0){
                // hide loading
            }
            return res.data
        })
    }
    // 请求实例
    request(options) {
        let instance = axios.create();
        this.setInterceptor(instance);
        let config = this.merge(options);
        return instance(config); //axios retun promise
    }
}
export default new Requests