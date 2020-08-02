// https://rollupjs.org/guide/en/#configuration-files

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/lib/index.tsx',
  output: [
    {
      entryFileNames: '[name].[format].js',
      dir: './dist/lib',
      format: 'cjs',
      exports: 'auto',
    },
    {
      entryFileNames: '[name].[format].js',
      dir: './dist/lib',
      format: 'es',
      exports: 'auto',
    },
  ],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({ babelHelpers: 'bundled', extensions }),
  ],
  external: ['react', 'react-dom'],
};
