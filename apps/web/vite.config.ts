import path from 'path'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:7300',
        changeOrigin: true
      }
    }
  },
  plugins: [vue(), vueJsx()],
})
