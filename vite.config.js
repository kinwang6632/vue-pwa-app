import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  build:{
    outDir:'docs'
  },
  plugins: [vue(),
  VitePWA({
    registerType:'autoUpdate',
    workbox:{
      runtimeCaching:[{
        urlPattern:({url}) => {
          return url.pathname.startsWith('/api')
        },
        handler:"CacheFirst",
        options:{
          cacheName:'api-cache',
          cacheableResponse:{
            statuses:[0,200]
          }
        }
      }]
    }
  })
  ],
})
