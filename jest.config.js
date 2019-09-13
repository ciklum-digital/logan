const path = require('path');

/**
 * @type {import('@jest/types/build').Config.DefaultOptions}
 */
module.exports = {
  displayName: 'logan',
  rootDir: path.resolve(),
  modulePathIgnorePatterns: ['dist'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json'
    }
  },
  bail: true,
  clearMocks: true,
  resetModules: true,
  preset: 'ts-jest',
  testMatch: ['**/src/**/*.spec.ts'],
  cacheDirectory: '<rootDir>/.cache',
  coverageReporters: ['text-summary'],
  coverageDirectory: '<rootDir>/coverage',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverageFrom: ['**/*.ts', '!**/dist/**']
};
