import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        children: 'text',
    },
};

export const Outlined: Story = {
    args: {
        children: 'Outlined',
        variant: 'outlined',
    },
};

export const Contained: Story = {
    args: {
        children: 'Contained',
        variant: 'contained',
    },
};

export const Primary: Story = {
    args: {
        children: 'Primary',
        variant: 'contained',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary',
        color: 'secondary',
        variant: 'contained',
    },
};

export const Success: Story = {
    args: {
        children: 'Success',
        color: 'success',
        variant: 'contained',
    },
};

export const Error: Story = {
    args: {
        children: 'Error',
        color: 'error',
        variant: 'contained',
    },
};

export const Small: Story = {
    args: {
        children: 'Small',
        variant: 'contained',
        size: 'small',
    },
};

export const Medium: Story = {
    args: {
        children: 'Medium',
        variant: 'contained',
    },
};

export const Large: Story = {
    args: {
        children: 'Large',
        variant: 'contained',
        size: 'large',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        disabled: true,
    },
};
