# Template React Component

![license](https://img.shields.io/github/license/kporten/template-react-component)
![tag](https://img.shields.io/github/v/tag/kporten/template-react-component)
![last-commit](https://img.shields.io/github/last-commit/kporten/template-react-component)
![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
![ci](https://github.com/kporten/template-react-component/workflows/CI/badge.svg?branch=master&event=push)

Template to develop a React component.

## Getting Started

```sh
yarn add template-react-component
# or
npm install template-react-component
```

### Example

> TypeScript

```tsx
import React from 'react';
import Component from 'template-react-component';

const Example: React.FC = () => {
  return <Component headline="Example" />;
};

export default Example;
```

[Click here to view the full documentation](./docs/README.md)

## Contribute

### Requirements

[Yarn 1 (Classic)](https://classic.yarnpkg.com/lang/en/)

### Install

```sh
yarn install
yarn start
```

### Development Scripts

```sh
yarn start # start development server
yarn test # run jest tests
yarn lint # lint code with eslint
yarn hint # hints for code with webhint
yarn type-check # run type check for files
yarn docs # create/update the docs
yarn changelog # create/update the changelog
yarn build # build production-ready component
yarn commit # commitizen friendly commit helper
```

### CI Scripts

```sh
yarn test:ci # run jest tests in ci mode
```

> This project contains a GitHub CI workflow that runs on push (except for tags) and pull request events.

### Secrets

You will need to define the following secrets to use this project with the initial CI workflow configuration.

```ini
# GitHub > Repository > Settings > Secrets
SNYK_TOKEN=... # https://support.snyk.io/hc/en-us/articles/360004037537-Authentication-for-third-party-tools
```

### Helpful Resources

- [React+TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)

### Publish

1. For external packages/dependencies, check if they should be added to your `rollup.config.js` in `external` and to your `package.json` in `peerDependencies` and `devDependencies`.
2. Build your production-ready component with `yarn build`
3. Create a new version with `yarn version`
4. Publish your component to the registry with `yarn publish`

### Environment

- [TypeScript](https://www.typescriptlang.org/)
- [Create React App](https://create-react-app.dev/)

#### Quality

- [ESLint](https://eslint.org/)
- [WebHint](https://webhint.io/)
- [Prettier](https://prettier.io/)
- [Snyk](https://snyk.io/)

#### Tests

- [Testing Library](https://testing-library.com/)
- [Jest](https://jestjs.io/)

#### Other

- [Rollup](https://rollupjs.org/guide/en/)
- [Commitizen](http://commitizen.github.io/cz-cli/)
- [Auto Changelog](https://github.com/CookPete/auto-changelog)
