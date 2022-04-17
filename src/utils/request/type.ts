import type { AxiosRequestConfig } from 'axios';

// 文件后缀对应的 MIME 类型
export const FileExtTypeMap = {
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  csv: 'text/csv',
  ppt: 'application/vnd.ms-powerpoint',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  png: 'image/png',
  rar: 'application/x-rar-compressed',
  pdf: 'application/pdf',
  zip: 'application/zip',
  ofd: 'application/ofd',
};

// 请求头类型
export const HeadersTypeMap = {
  json: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
  formData: {
    'Content-Type': 'multipart/form-data',
  },
};

type ResponseType = {
  [key: string]: AxiosRequestConfig
};

// 响应类型
export const ResponseTypeMap: ResponseType = {
  blob: {
    responseType: 'blob',
  },
  json: {
    responseType: 'json',
  },
};
