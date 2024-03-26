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
    framework: '@storybook/react-webpack5',
    docs: {
        autodocs: 'tag',
        defaultName: 'Overview',
    },
    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
};
export default config;
