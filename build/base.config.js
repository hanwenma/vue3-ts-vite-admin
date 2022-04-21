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
    build: {
      sourcemap: true,
    },
  },
  test: {
    base: '/',
    apiHost: testApiHost,
    build: {
      sourcemap: true,
      cssCodeSplit: true, // https://vitejs.cn/config/#build-csscodesplit
    },
  },
  prod: {
    base: '/',
    apiHost: prodApiHost,
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              const arr = id.toString().split('node_modules/')[1].split('/');
              switch (arr[0]) {
                case '@vue':
                case 'axios':
                case 'element-plus':
                  return `_${arr[0]}`;
                default:
                  return '__vendor';
              }
            }
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  },
};
