// https://jestjs.io/docs/en/configuration
module.exports = {
  testMatch: ['**/*.test.ts?(x)'],
  collectCoverageFrom: ['src/lib/**/*.tsx', '!src/stories/**/*'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
};
