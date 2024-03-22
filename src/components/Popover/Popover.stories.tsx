import { Meta, StoryObj } from '@storybook/react';
import Popover from './Popover';
import { fn } from '@storybook/test';

const meta = {
    title: 'Components/Popov',
    component: Popover,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClose: fn() },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof Popover>;
