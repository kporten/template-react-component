// https://jestjs.io/docs/en/configuration
module.exports = {
  collectCoverageFrom: [
    'src/lib/**/*.ts?(x)',
    '!src/lib/**/index.ts',
    '!src/stories/**/*',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file.mock.js',
    '\\.svg$': '<rootDir>/__mocks__/svg.mock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['./jest.setup.js', './__mocks__/matchMedia.mock.js'],
  testMatch: ['**/*.test.ts?(x)'],
};
