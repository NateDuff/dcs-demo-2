import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import { dcsContentPlugin, dcsSeoPlugin } from '@duffcloudservices/cms/plugins'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dcsContentPlugin(),
    dcsSeoPlugin(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
