# Template React Component

![license](https://img.shields.io/github/license/kporten/template-react-component)
![tag](https://img.shields.io/github/v/tag/kporten/template-react-component)
![last-commit](https://img.shields.io/github/last-commit/kporten/template-react-component)
![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
![ci](https://github.com/kporten/template-react-component/workflows/CI/badge.svg?branch=master&event=push)

Template to develop a React component with TypeScript. Clone it and adapt the README to your React component.

---

## Getting Started

```sh
yarn add template-react-component
```

### Example

`Example.tsx`

```tsx
import Component from 'template-react-component';

const Example: React.FC = () => {
  return <Component headline="Example" />;
};

export default Example;
```

### Documentation

| Property | Description         | Type   | Required | Default |
| -------- | ------------------- | ------ | -------- | ------- |
| headline | Set a headline text | string | Yes      | -       |

> To get an interactive documentation with Storybook, clone the project and start it.

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
yarn start # start storybook
yarn test # run jest tests and watch
yarn test:all # run jest tests and watch all with coverage
yarn e2e # open cypress to start e2e tests manually
yarn e2e:run # run cypress e2e tests
yarn lint # lint code with eslint
yarn hint # hints for code with webhint
yarn type-check # run type check for files
yarn changelog # create/update the changelog
yarn build # build production-ready component
yarn build:storybook # build static storybook
yarn commit # commitizen friendly commit helper
```

### GitHub Actions

You will need to define the following secrets to use this project with the initial workflow configuration.

```ini
# GitHub > Repository > Settings > Secrets
SNYK_TOKEN=... # https://support.snyk.io/hc/en-us/articles/360004037537-Authentication-for-third-party-tools
CYPRESS_PROJECT_ID=... # https://docs.cypress.io/guides/dashboard/projects.html#Setup
CYPRESS_RECORD_KEY=... # https://docs.cypress.io/guides/dashboard/projects.html#Setup
```

#### Jobs

- test (run jest tests: `yarn test:ci`)
- e2e (run cypress tests: `yarn e2e:ci`)
- security (check for vulnerabilities)

### Publish

Create a new version and publish your component to the registry with `yarn version`.

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
  - `yarn build`
  - `yarn changelog`
  - `git add`
- Lifecycle method `postversion`
  - `git push`
  - `yarn publish`

---

## Environment

- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)

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
