module.exports = {
    testEnvironment: 'jsdom',
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['html', 'lcov'],
    testMatch: ['**/src/**/*.test.js'],
    // preset: '@babel/preset-env',
    verbose: true,
}