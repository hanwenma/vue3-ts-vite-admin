import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import baseConfig from './build/base.config';

const path = require('path');

const getAbsPath = (url: string) => path.resolve(__dirname, url);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // you can do something before return
  return {
    ...baseConfig[mode],
    plugins: [vue()],
    resolve: {
      alias: {
        '@': getAbsPath('./src'),
        '@components': getAbsPath('./src/components'),
        '@utils': getAbsPath('./src/utils'),
        '@pages': getAbsPath('./src/pages'),
        '@build': getAbsPath('./build'),
      },
    },
  };
});
