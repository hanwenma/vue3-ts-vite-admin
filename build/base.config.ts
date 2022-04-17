// 开发环境 API 地址
const devApiHost = 'http://127.0.0.1:4523/mock/870247' || 'http://dev.example.com';

// 测试环境 API 地址
const testApiHost = 'http://test.example.com';

// 生产环境 API 地址
const prodApiHost = 'http://prod.example.com';

export default {
  dev: {
    base: './', // https://vitejs.cn/config/#base
    apiHost: devApiHost,
    server: {
      proxy: {
        // 选项写法
        '/api': {
          target: 'http://127.0.0.1:4523',
          changeOrigin: true,
          rewrite: (path) => {
            console.log('rewriterewriterewriterewriterewrite', path);
            return path.replace(/^\/api/, '');
          },
        },
      },
    },
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
