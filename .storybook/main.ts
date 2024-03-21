import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/preset-scss',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: { fsCache: true, lazyCompilation: true },
    },
    docs: {
        docsMode: true,
        autodocs: 'tag',
    },
};
export default config;
