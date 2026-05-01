/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    ['jest-html-reporters',
      {
        publicPath: 'reports',
        filename: 'report.html'
      }
    ]
  ]
};