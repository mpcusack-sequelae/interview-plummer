module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: { '^axios$': '<rootDir>/node_modules/axios/dist/node/axios.cjs' },
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    'node_modules/(?!variables/.*)'
  ]
};