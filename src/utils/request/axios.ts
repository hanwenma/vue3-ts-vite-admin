import axios from 'axios';
import type { AxiosRequestHeaders, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';
import { downloadFile } from '@/utils/tool';
import baseConfig from '@build/base.config';
import { FileExtTypeMap, HeadersTypeMap, ResponseTypeMap } from './type';

// 环境配置
const envConfig = (baseConfig as any)[import.meta.env.VITE_API_ENV];

/**
 * 创建 JSON axios 对象
 * @param url 【请求地址】
 * @param params【请求参数】
 * @param reqConf【请求配置】
 */
const createAxiosObj = (
  url: string,
  headers: AxiosRequestHeaders = HeadersTypeMap.json,
  params: any = {},
  reqConf: AxiosRequestConfig = {},
) => {
  // 创建axios实例
  const service = axios.create({
    baseURL: envConfig.apiHost, // baseURL 将自动加在 url 前面
    timeout: 30000, // 请求超时时间
    responseType: reqConf.responseType, // 表示服务器响应的数据类型
  });

  // 请求拦截：https://axios-http.com/zh/docs/interceptors
  service.interceptors.request.use(
    (config) => {
      // do something

      config.data = params;
      config.headers = {
        ...headers,
        language: Cookies.get('language') || '',
      };
      return config;
    },
    (error: any) => {
      console.error('network exception in request >>>>>>>>> ', error, url);
    },
  );

  // 响应拦截：https://axios-http.com/zh/docs/interceptors
  service.interceptors.response.use(
    (config) => {
      // do something

      // 处理 token
      if (config.headers['access-token']) {
        Cookies.set('token', config.headers['access-token']);
      }

      return reqConf.responseType === ResponseTypeMap.blob ? config : config.data;
    },
    (error: any) => {
      console.error('network exception in response >>>>>>>>> ', error, url);
      return error.response;
    },
  );

  return service;
};

/**
 * get 请求
 * @param url 【请求地址 —— 非公共部分地址】
 * @param params【请求参数】
 */
const get = (url: string, params: any = {}) => {
  const axiosObj = createAxiosObj(url, HeadersTypeMap.json, params);
  return axiosObj.get(url, { params });
};

/**
 * Post 请求
 * @param url 【请求地址 —— 非公共部分地址】
 * @param params【请求参数】
 */
const post = (url: string, params: any = {}) => {
  const axiosObj = createAxiosObj(url, HeadersTypeMap.json, params, ResponseTypeMap.json);
  return axiosObj.post(url);
};

/**
 * upload 请求
 * @param url 【请求地址 —— 非公共部分地址】
 * @param params【请求参数】
 */
const upload = (url: string, params: any = {}) => {
  const axiosObj = createAxiosObj(url, HeadersTypeMap.formData, params, ResponseTypeMap.json);
  return axiosObj.post(url);
};

/**
 * download 请求
 * @param url 【请求地址 —— 非公共部分地址】
 * @param params【请求参数】
 */
const download = (url: string, params: FormData = new FormData()) => {
  const axiosObj = createAxiosObj(url, HeadersTypeMap.json, params, ResponseTypeMap.blob);
  const config: any = axiosObj.post(url);

  // 获取文件名
  let contentDisposition = config.headers['content-disposition'];
  if (!contentDisposition) {
    const time = new Date();
    contentDisposition = `;filename=${moment(time).valueOf()}.xlsx`;
  }
  const fileName = window.decodeURI(contentDisposition.split('filename=')[1]);

  // 文件类型
  const suffix: string = fileName.split('.')[1];
  const type: string = (FileExtTypeMap as any)[suffix];

  // 下载文件
  downloadFile(config.data, fileName, type);

  return config.data;
};

export default {
  get,
  post,
  upload,
  download,
};
