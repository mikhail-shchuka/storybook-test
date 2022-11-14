module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "storybook-addon-pseudo-states",
    "@storybook/client-api",
    "storybook-addon-designs"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  }
}
