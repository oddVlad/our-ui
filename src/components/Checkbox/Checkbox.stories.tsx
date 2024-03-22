import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
import Flex from '../Flex';

const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = () => {
    const [value, setValue] = useState(true);
    const handleChange = () => {
        setValue(!value);
    };

    return <Checkbox checked={value} onChange={handleChange} />;
};

export const Color: Story = {
    render: () => (
        <Flex gap={10}>
            <Checkbox color="primary" checked />
            <Checkbox color="secondary" checked />
            <Checkbox color="success" checked />
            <Checkbox color="error" checked />
            <Checkbox checked disabled />
            <Checkbox disabled />
        </Flex>
    ),
};

export const Size: Story = {
    render: () => (
        <Flex gap={10}>
            <Checkbox checked iconSize="small" />
            <Checkbox checked />
            <Checkbox checked iconSize="large" />
        </Flex>
    ),
};
