const baseJestConfig = require('./jest.config');

module.exports = {
  ...baseJestConfig,
  collectCoverage: true,
  coverageReporters: ['text', 'text-summary', 'text-lcov', 'lcov']
};
