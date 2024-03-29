import type { StorybookConfig } from '@storybook/react-webpack5';
import type { Configuration } from 'webpack';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../assets/*.mdx'],
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
    webpackFinal: async (config: Configuration) => {
        config.module = config.module || {};
        config.module.rules = config.module.rules || [];

        const imageRule = config.module.rules.find((rule) =>
            rule?.['test']?.test('.svg')
        );
        if (imageRule) {
            imageRule['exclude'] = /\.svg$/;
        }

        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack', 'url-loader'],
        });
        return config;
    },
};
export default config;
