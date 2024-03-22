import type { Meta, StoryObj } from '@storybook/react';
import Flex from './Flex';

const meta = {
    title: 'Containers/Flex',
    component: Flex,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Using: Story = {
    args: {},
};
