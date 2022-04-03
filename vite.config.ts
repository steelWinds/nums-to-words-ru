import path from 'path';
import {defineConfig} from 'vite';
import type {UserConfigExport} from 'vite';

const resolve = path.resolve;

const config: UserConfigExport = defineConfig({
  build: {
    lib: {
      entry: resolve('src/index.ts'),
      name: 'numbs-to-words-ru',
    },
  },

  resolve: {
    alias: {
      '@': resolve('./src'),
      '@/interfaces/': resolve('./src/interfaces/'),
      '@/annotations/': resolve('./src/annotations/'),
      '@/classes/': resolve('./src/modules/classes/'),
      '@/constants/': resolve('./src/constants/'),
      '@/errors/': resolve('./src/errors/'),
    },
  },
});

export default config;
