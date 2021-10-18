import axios from "axios";

const baseUrl ="http://5b56-27-34-68-145.ngrok.io/"

let APIKit = axios.create({
    baseURL: baseUrl,
    headers:{
        Accept: 'application/json',
        // 'Content-Type': '',
    },
    timeout: 8000,
})

// APIKit.CancelToken = axios.CancelToken;
// APIKit.isCancel = axios.isCancel;

// APIKit.interceptors.request.use(
//     async (config) =>{
//         if(config.method === 'post'){
//             config.headers['Content-Type'] = 'application/json'
//         }
//         if(config.method === 'put'){
//             config.headers['Content-Type'] = 'application/json'
//         }
//     }
// )

export default APIKit;