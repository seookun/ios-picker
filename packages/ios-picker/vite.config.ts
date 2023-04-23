import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist/core',
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'iOSPicker',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
  },
  plugins: [dts()],
});
