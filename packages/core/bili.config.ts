import { Config } from 'bili';

const config: Config = {
  input: 'src/index.ts',
  output: {
    dir: 'dist/dist',
    format: ['cjs', 'esm', 'umd', 'umd-min'],
    moduleName: 'logan-core'
  }
};

export default config;
