// https://rollupjs.org/guide/en/#configuration-files
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import subpathExternals from 'rollup-plugin-subpath-externals';
import svgr from '@svgr/rollup';
import ts from '@wessberg/rollup-plugin-ts';
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
    // * clean output dir
    del({ targets: 'dist' }),
    // * resolve imports
    resolve({ extensions }),
    commonjs(),
    json(),
    // * transpile TypeScript and generate type declaration files
    ts({
      transpiler: 'babel',
    }),
    // * image handling (see also storybook config)
    url(),
    svgr({
      namedExport: 'ReactComponent',
      dimensions: false,
      memo: true,
      titleProp: true,
    }),
    // * externalize all dependencies, even subpath imports
    subpathExternals(pkg),
  ],
};
