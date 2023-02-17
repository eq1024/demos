import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse} from 'axios';

const instance = axios.create({
  timeout: 1000 * 30,
  headers: {},
});
instance.interceptors.request.use((config) => {
  return config;
});
instance.interceptors.response.use((config) => {
  return config;
});

type requestParmas = {
  url: string;
  data?: any;
  config?: AxiosRequestConfig;
};

function get<T = any>(data:requestParmas): Promise<AxiosResponse<T>> {
  console.log("zzzz",data.url, data.config);
  
  return instance(data.url, data?.config);
}

export default {
  get
}
