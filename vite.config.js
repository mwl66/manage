import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins:['@babel/plugin-transform-react-jsx']
    }
  })],
  // 端口修改
  server: {
    port: 8081
  }
})
