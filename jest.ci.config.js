const baseJestConfig = require('./jest.config');

/**
 * @type {import('@jest/types/build').Config.DefaultOptions}
 */
module.exports = {
  ...baseJestConfig,
  collectCoverage: true,
  coverageReporters: ['text', 'text-summary', 'text-lcov', 'lcov']
};
