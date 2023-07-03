import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcsspxtoviewport from 'postcss-px-to-viewport'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
        postcsspxtoviewport({
          unitToConvert: 'px',
          viewportWidth: 375,
          unitPrecision: 5,
          propList: ['*'],
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: [],
          landscape: false,
          landscapeUnit: 'vw',
          landscapeWidth: 568
        })]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})

