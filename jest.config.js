module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/src/**/*.spec.ts'],
  cacheDirectory: '<rootDir>/.cache',
  coverageReporters: ['text-summary'],
  coverageDirectory: '<rootDir>/coverage',
  testPathIgnorePatterns: ['/node_modules/', '/playground/'],
  collectCoverageFrom: ['**/*.ts', '!**/dist/**', '!**/playground/**'],
};
