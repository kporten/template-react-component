// https://storybook.js.org/docs/react/configure/overview
module.exports = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
  stories: ['../src/stories/**/*.stories.tsx'],
  // * make the storybook webpack config compatible with the rollup build config
  webpackFinal: async (config) => {
    // * remove svg from file-loader test rule
    config.module.rules = config.module.rules.map((rule) =>
      rule.test.test('.svg')
        ? {
            ...rule,
            test: new RegExp(rule.test.toString().replace(/\/|svg\|/g, '')),
          }
        : rule,
    );

    // * add rule to load svg with svgr and url-loader
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
