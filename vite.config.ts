import {defineConfig} from 'vite'
import UnoCSS from 'unocss/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  server: {
    proxy: {
      '/videos': {
        target: 'https://www.googleapis.com/youtube/v3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/videos/, '/videos'),
      },
      '/channel': {
        target: 'https://www.googleapis.com/youtube/v3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/channel/, ''),
      },
      '/image': {
        target: 'https://i.ytimg.com/vi/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/image/, ''),
      },
      '/channelImage': {
        target: 'https://yt3.ggpht.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/channelImage/, ''),
      },
    },
  },
})
