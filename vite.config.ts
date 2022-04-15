/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import baseConfig from './build/base.config';

const path = require('path');
const getAbsPath = (url: string) => path.resolve(__dirname, url);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  return {
    ...baseConfig[mode],
    plugins: [vue()],
    resolve: {
      alias: {
        '@': getAbsPath('./src'),
        '@components': getAbsPath('./src/components'),
      },
    },
  }
});
