module.exports = {
  // ...
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.css$': 'jest-css-modules-transform',
    '\\.(css|less)$': 'jest-transform-stub'
  },
  transformIgnorePatterns: [
    "/node_modules/(?!bootstrap)",
    '<rootDir>/node_modules/(?!(@babel)/)',
  ],
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx'],
  testMatch: ['**/*.test.js'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(@babel)/)'
  ]
};
