// https://storybook.js.org/docs/react/configure/overview
module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
  ],
  stories: ['../src/stories/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.module.rules = config.module.rules.map((rule) =>
      rule.test.test('.svg')
        ? {
            ...rule,
            test: new RegExp(rule.test.toString().replace(/\/|svg\|/g, '')),
          }
        : rule,
    );

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            dimensions: false,
            memo: true,
            titleProp: true,
          },
        },
        {
          loader: 'url-loader',
          options: {
            emitFiles: false,
          },
        },
      ],
    });

    return config;
  },
};
