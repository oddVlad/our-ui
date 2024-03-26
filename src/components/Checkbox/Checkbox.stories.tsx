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
    argTypes: {
        checked: {
            control: { type: 'none' },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = (props: Story) => {
    const [value, setValue] = useState<boolean>(true);
    const handleChange = (): void => {
        setValue(!value);
    };

    return <Checkbox checked={value} onChange={handleChange} {...props} />;
};

export const Color = () => (
    <Flex gap={10}>
        <Checkbox color="primary" checked />
        <Checkbox color="secondary" checked />
        <Checkbox color="success" checked />
        <Checkbox color="error" checked />
        <Checkbox checked disabled />
        <Checkbox disabled checked={false} />
    </Flex>
);

export const Size = () => (
    <Flex gap={10}>
        <Checkbox checked iconSize="small" />
        <Checkbox checked />
        <Checkbox checked iconSize="large" />
    </Flex>
);
