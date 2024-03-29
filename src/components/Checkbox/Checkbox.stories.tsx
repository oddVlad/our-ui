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

    return (
        <label style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox checked={isChecked} onChange={handleChange} {...props} />
            Checkbox
        </label>
    );
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

export const Indeterminate = () => {
    const [checked, setChecked] = React.useState([false, true]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
    };

    return (
        <Flex direction="column" align="none" content="content-center">
            <label style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox
                    checked={checked[0] && checked[1]}
                    isIndeterminate={checked[0] || checked[1]}
                    onChange={handleChange1}
                />
                Parent
            </label>
            <div style={{ marginLeft: '40px' }}>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox checked={checked[0]} onChange={handleChange2} />
                    Child 1
                </label>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox checked={checked[1]} onChange={handleChange3} />
                    Child 2
                </label>
            </div>
        </Flex>
    );
};
