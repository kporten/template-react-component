> :warning: this project has been replaced by https://github.com/kporten/template-react and is no longer maintained.

# Template React Component

![license](https://img.shields.io/github/license/kporten/template-react-component)
![tag](https://img.shields.io/github/v/tag/kporten/template-react-component)
![last-commit](https://img.shields.io/github/last-commit/kporten/template-react-component)
![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
![ci](https://github.com/kporten/template-react-component/workflows/CI/badge.svg?branch=master&event=push)

Template to start easily with the development of a React component with TypeScript. Clone this repository and adapt this README to your React component.

The code of your component is in the `src/lib` folder. The content of this folder will be bundled if you execute `yarn build`. Just start by modifying the file `Component.tsx` to your needs and see your changes by starting the project with `yarn start`.

Export all externally required functions, components and variables in the package entry point `index.ts`. Then you can use these exports in other projects after you installed your package.

To write unit tests (https://testing-library.com/) for your component(s) add a file next to your component with the file ending `.test.tsx`. Then execute your tests with `yarn test`.

Document your component use cases as interactive stories (https://storybook.js.org/) by modifying the file `Component.stories.tsx` in `src/stories` and feel free to add more stories for other components or use cases.

If you would like to write E2E tests (https://www.cypress.io/) for your whole project, you can find a sample file in `cypress/e2e`. Then execute your tests with `yarn e2e` together with `yarn start`.

To publish your component, check your optional CI pipeline configuration (e.g. GitHub Actions) and create a new version with `yarn version` (automatic build and publish).

---

## Getting Started

```sh
yarn add [your-component-package]
```

### Example

`Example.tsx`

```tsx
import Component from '[your-component-package]';

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
yarn husky install # enable git hooks
```

### Scripts

```sh
yarn start # start storybook
yarn test # run jest tests and watch
yarn test:all # run jest tests and watch all with coverage
yarn e2e # open cypress to start e2e tests manually
yarn lint # lint code with eslint
yarn type-check # run type check for files
yarn changelog # create/update the changelog
yarn build # build production-ready component
yarn build:storybook # build static storybook
yarn commit # commitizen friendly commit helper
```

### GitHub Actions

You will need to define the following secrets in your repository settings to use this project with the initial workflow configuration.

```ini
# GitHub > Repository > Settings > Secrets
SNYK_TOKEN=... # https://support.snyk.io/hc/en-us/articles/360004037537-Authentication-for-third-party-tools
CYPRESS_PROJECT_ID=... # https://docs.cypress.io/guides/dashboard/projects.html#Setup
CYPRESS_RECORD_KEY=... # https://docs.cypress.io/guides/dashboard/projects.html#Setup
```

Extend the script `e2e:run` in the `package.json` file with `--records` if you have defined the record key.

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
- Hook `commit-msg`
  - `commitlint`

On **version** (yarn), the following commands are executed...

- Lifecycle method `version`
  - `yarn build`
  - `yarn changelog`
  - `git add`
- Lifecycle method `postversion`
  - `git push`
  - `yarn publish`

---

## Environment

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)

### Quality

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Snyk](https://snyk.io/)

### Tests

- [Testing Library](https://testing-library.com/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io)

### Other

- [Rollup](https://rollupjs.org/guide/en/)
- [Commitizen](http://commitizen.github.io/cz-cli/)
- [Auto Changelog](https://github.com/CookPete/auto-changelog)
