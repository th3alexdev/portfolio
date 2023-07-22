import { defineConfig } from 'vite';
import sass from 'sass';

export default defineConfig({
  plugins: [
    {
      name: 'sass',
      preprocess: sass,
    }
  ],
  preview:{
    port: 5000
  },
  assetsDir: 'assets/'
});