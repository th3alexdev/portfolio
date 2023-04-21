import { defineConfig } from 'vite';
import sass from 'sass';

export default defineConfig({
  plugins: [
    {
      name: 'sass',
      preprocess: sass,
    },
  ],
});