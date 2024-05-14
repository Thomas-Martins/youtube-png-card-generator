import {defineConfig} from 'vite'
import UnoCSS from 'unocss/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  server: {
    proxy: {
      '/api/image': {
        target: 'https://i.ytimg.com/vi/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/image/, ''),
      },
      '/api/channelImage': {
        target: 'https://yt3.ggpht.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/channelImage/, ''),
      },
      '/api': {
        target: 'https://www.googleapis.com/youtube/v3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
