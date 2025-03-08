import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/naver-api': {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/naver-api/, ''),
      },
      '/v1': {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
})
