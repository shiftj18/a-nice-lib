import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.umd.js',
    name: 'ANiceLib',
    format: 'umd',
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
  ],
};
