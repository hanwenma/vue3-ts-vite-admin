import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import baseConfig from './build/base.config';

const path = require('path');

const getAbsPath = (url: string) => path.resolve(__dirname, url);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // you can do something before return
  return {
    ...baseConfig[mode],
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
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
