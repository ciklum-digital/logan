import { Config } from 'bili';

const config: Config = {
  input: 'src/index.ts',
  output: {
    format: ['cjs', 'esm', 'umd', 'umd-min'],
    moduleName: 'logan-core'
  }
};

export default config;
