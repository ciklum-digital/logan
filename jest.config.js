module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageReporters: ['text-summary'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['**/*.ts', '!**/dist/**', '!**/playground/**'],
  testPathIgnorePatterns: ['/node_modules/', '/playground/'],
  testMatch: ['**/src/**/*.spec.ts']
};
