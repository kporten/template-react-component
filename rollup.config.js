// https://rollupjs.org/guide/en/#configuration-files
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import subpathExternals from 'rollup-plugin-subpath-externals';
import svgr from '@svgr/rollup';
import typescript from '@wessberg/rollup-plugin-ts';
import url from '@rollup/plugin-url';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/lib/index.ts',
  output: [
    {
      entryFileNames: '[name].[format].js',
      dir: './dist/lib',
      format: 'cjs',
      exports: 'named',
    },
    {
      entryFileNames: '[name].[format].js',
      dir: './dist/lib',
      format: 'es',
      exports: 'named',
    },
  ],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    typescript({
      transpiler: 'babel',
    }),
    url(),
    svgr({
      namedExport: 'ReactComponent',
      dimensions: false,
      memo: true,
      titleProp: true,
    }),
    subpathExternals(pkg),
  ],
};
