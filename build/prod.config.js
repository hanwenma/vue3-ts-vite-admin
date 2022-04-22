export default function getProdconfig(
  env
) {
  return {
    sourcemap: env == 'test',
    cssCodeSplit: true, // https://vitejs.cn/config/#build-csscodesplit
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes(
              'node_modules'
            )
          ) {
            const arr = id
              .toString()
              .split(
                'node_modules/'
              )[1]
              .split('/');
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
        chunkFileNames:
          'assets/js/[name]-[hash].js',
        assetFileNames:
          'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  };
}
