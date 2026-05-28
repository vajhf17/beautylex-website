import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Images/fonts: stable filename, no hash — only upload when the file actually changes
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] ?? assetInfo.name ?? ''
          if (/\.(png|jpe?g|svg|gif|webp|ico|woff2?|ttf|eot)$/i.test(name)) {
            return 'assets/[name][extname]'
          }
          // CSS and everything else: keep hash for cache busting
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})
