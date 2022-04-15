// 开发环境 API 地址
const devApiHost = 'http://dev.example.com';

// 测试环境 API 地址
const testApiHost = 'http://test.example.com';

// 生产环境 API 地址
const prodApiHost = 'http://prod.example.com';

export default {
  dev: {
    base: './', // https://vitejs.cn/config/#base
    apiHost: devApiHost,
  },
  test: {
    base: '/',
    apiHost: testApiHost,
  },
  prod: {
    base: '/',
    apiHost: prodApiHost,
  },
};
