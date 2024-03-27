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
    const [isChecked, setChecked] = useState<boolean>(true);
    const handleChange = (): void => {
        setChecked((prev) => !prev);
    };

    return <Checkbox checked={isChecked} onChange={handleChange} {...props} />;
};

export const Color = () => (
    <Flex gap={10}>
        <Checkbox color="primary" checked title="primary" />
        <Checkbox color="secondary" checked title="secondary" />
        <Checkbox color="success" checked title="success" />
        <Checkbox color="error" checked title="error" />
        <Checkbox checked disabled title="checked disabled" />
        <Checkbox disabled title="disabled" />
    </Flex>
);

export const Size = () => (
    <Flex gap={10}>
        <Checkbox checked iconSize="small" />
        <Checkbox checked />
        <Checkbox checked iconSize="large" />
    </Flex>
);
