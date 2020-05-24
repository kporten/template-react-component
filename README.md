# Template React Component

![license](https://img.shields.io/github/license/kporten/template-react-component)

![tag](https://img.shields.io/github/v/tag/kporten/template-react-component)

![last-commit](https://img.shields.io/github/last-commit/kporten/template-react-component)

![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)

Template to develop a React component

## Requirements

[Yarn 1 (Classic)](https://classic.yarnpkg.com/lang/en/)

## Getting Started

```bash
yarn install
yarn start
```

## Development Scripts

```bash
yarn start # start development server
yarn test # run jest tests
yarn lint # lint code with eslint
yarn build # build production-ready component
yarn tsc:check # run type check for files
yarn commit # commitizen friendly commit
```

## CI Scripts

```bash
yarn test:ci # run jest tests in ci mode
```

> This template contains a GitHub CI workflow that runs on push (except for tags) and pull request events.

## Publish

1. Build your production-ready component with `yarn build`
2. Create a new version with `yarn version`
3. Publish your component to the registry with `yarn publish`

## Environment

- [TypeScript](https://www.typescriptlang.org/)
- [Create React App](https://create-react-app.dev/)

### Quality

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

### Tests

- [Testing Library](https://testing-library.com/)
- [Jest](https://jestjs.io/)

### Other

- [Commitizen](http://commitizen.github.io/cz-cli/)
- [Auto Changelog](https://github.com/CookPete/auto-changelog)
