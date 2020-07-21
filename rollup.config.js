// https://rollupjs.org/guide/en/#configuration-files

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/lib/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'auto',
    },
    {
      file: pkg.module,
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
