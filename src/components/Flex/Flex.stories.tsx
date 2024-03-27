import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Flex from './Flex';
import Button from '../Button';

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

const FlexGroup = (props: React.ComponentProps<typeof Flex>) => (
    <div style={{ width: '400px' }}>
        <Flex {...props}>
            <Button variant="outlined">Item 1</Button>
            <Button color="secondary">Item 2</Button>
            <Button variant="contained" color="success">
                Item 3
            </Button>
        </Flex>
    </div>
);

export const Row = {
    args: {
        gap: 20,
    },
    render: (args) => <FlexGroup {...args} />,
} satisfies Story;

export const Column = {
    args: {
        direction: 'column',
        gap: 20,
    },
    render: (args) => <FlexGroup {...args} />,
} satisfies Story;

export const Wrapped = {
    args: {
        gap: 20,
        isWrapped: true,
    },
    render: (args) => (
        <div style={{ width: '200px' }}>
            <Flex {...args}>
                <Button variant="outlined">Item 1</Button>
                <Button color="secondary">Item 2</Button>
                <Button variant="contained" color="success">
                    Item Item Item Item
                </Button>
            </Flex>
        </div>
    ),
} satisfies Story;
