# Template React Component

![license](https://img.shields.io/github/license/kporten/template-react-component)
![tag](https://img.shields.io/github/v/tag/kporten/template-react-component)
![last-commit](https://img.shields.io/github/last-commit/kporten/template-react-component)
![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
![ci](https://github.com/kporten/template-react-component/workflows/CI/badge.svg?branch=master&event=push)

Template to develop a React component with TypeScript.

---

## Getting Started

```sh
yarn add template-react-component
# or
npm install template-react-component
```

### Example

`Example.tsx`

```tsx
import React from 'react';
import Component from 'template-react-component';

const Example: React.FC = () => {
  return <Component headline="Example" />;
};

export default Example;
```

### Documentation

[Click here to view the documentation](./docs/README.md)

---

## Contribute

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn 1 (Classic)](https://classic.yarnpkg.com/lang/en/)

### Install

```sh
yarn install
```

### Scripts

```sh
yarn start # start development server
yarn test # run jest tests and watch
yarn test:all # run jest tests and watch all with coverage
yarn lint # lint code with eslint
yarn hint # hints for code with webhint
yarn type-check # run type check for files
yarn changelog # create/update the changelog
yarn docs # create/update the docs
yarn build # build production-ready component
yarn commit # commitizen friendly commit helper
```

### GitHub Actions

You will need to define the following secrets to use this project with the initial workflow configuration.

```ini
# GitHub > Repository > Settings > Secrets
SNYK_TOKEN=... # https://support.snyk.io/hc/en-us/articles/360004037537-Authentication-for-third-party-tools
```

#### Jobs

- test (run jest tests)
- security (check for vulnerabilities)

### Publish

1. For external packages/dependencies, check if they should be added to your `rollup.config.js` in `external` and to your `package.json` in `peerDependencies` and `devDependencies`.
2. Create a new version and publish your component to the registry with `yarn version`.

On **commit** (git), the following commands are executed...

- Hook `pre-commit`
  - `yarn type-check`
  - `yarn lint`
  - `yarn hint`
- Hook `commit-msg`
  - `commitlint`

On **push** (git), the following commands are executed...

- Hook `pre-push`
  - `yarn test:ci`

On **publish** (yarn), the following commands are executed...

- Lifecycle method `version`
  - `yarn build` (`yarn build:bundle` + `yarn build:declaration`)
  - `yarn changelog`
  - `yarn docs`
  - `git add`
- Lifecycle method `postversion`
  - `git push`
  - `yarn publish`

---

## Environment

- [TypeScript](https://www.typescriptlang.org/)
- [Create React App](https://create-react-app.dev/)

### Quality

- [ESLint](https://eslint.org/)
- [WebHint](https://webhint.io/)
- [Prettier](https://prettier.io/)
- [Snyk](https://snyk.io/)

### Tests

- [Testing Library](https://testing-library.com/)
- [Jest](https://jestjs.io/)

### Other

- [Rollup](https://rollupjs.org/guide/en/)
- [Commitizen](http://commitizen.github.io/cz-cli/)
- [Auto Changelog](https://github.com/CookPete/auto-changelog)
