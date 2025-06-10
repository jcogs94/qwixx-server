import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, '../server/dist/public'),
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@imageAssets": path.resolve(__dirname, './src/assets/images'),
      "@assets": path.resolve(__dirname, './src/assets'),
      "@configs": path.resolve(__dirname, './src/lib/configs'),
      "@constants": path.resolve(__dirname, './src/lib/constants'),
      "@featureComponents": path.resolve(__dirname, './src/components/features'),
      "@layoutComponents": path.resolve(__dirname, './src/components/layout'),
      "@providerComponents": path.resolve(__dirname, './src/components/providers'),
      "@uiComponents": path.resolve(__dirname, './src/components/ui'),
      "@wrapperComponents": path.resolve(__dirname, './src/components/wrappers'),
      "@components": path.resolve(__dirname, './src/components'),
      "@customTypes": path.resolve(__dirname, './src/lib/types'),
      "@hooks": path.resolve(__dirname, './src/hooks'),
      "@pages": path.resolve(__dirname, './src/pages'),
      "@routes": path.resolve(__dirname, './src/lib/configs/routes.tsx'),
      "@reduxService": path.resolve(__dirname, './src/services/redux'),
      "@socketService": path.resolve(__dirname, './src/services/socket'),
      "@services": path.resolve(__dirname, './src/services'),
      "@utils": path.resolve(__dirname, './src/lib/utils'),
    }
  }
})
