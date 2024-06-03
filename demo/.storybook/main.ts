import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/app/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'demo/vite.config.ts',
      },
    },
  },

  staticDirs: [
    {
      from: '../../tools/assets',
      to: '/assets',
    },
    {
      from: '../../tools/mocks/mockServiceWorker.js',
      to: '/mockServiceWorker.js',
    },
  ],

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}

export default config

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
