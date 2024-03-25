import React, { useRef, useState } from 'react';
import { Meta } from '@storybook/react';
import Popover from './Popover';
import { fn } from '@storybook/test';
import Button from '../Button';
import Flex from '../Flex';

const meta = {
    title: 'Components/Popover',
    component: Popover,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClose: fn() },
} satisfies Meta<typeof Popover>;

export default meta;

export const Default = () => {
    const anchorEl = useRef<HTMLButtonElement>(null);
    const [open, setOpen] = useState(false);

    const handleTogglePopover = () => {
        setOpen(!open);
    };

    const handleClosePopover = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                ref={anchorEl}
                onClick={handleTogglePopover}
                variant="contained"
            >
                Toggle Popover
            </Button>
            <Popover
                anchorEl={anchorEl}
                open={open}
                onClose={handleClosePopover}
            >
                <div>This is the content of the Popover</div>
            </Popover>
        </div>
    );
};

export const ClosingFromInside = () => {
    const anchorEl = useRef<HTMLButtonElement>(null);
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleReset = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        handleClose();
    };

    const handleSubmiting = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        handleClose();
    };

    return (
        <div>
            <Button ref={anchorEl} onClick={handleToggle} variant="contained">
                Send Message
            </Button>
            <Popover anchorEl={anchorEl} open={open} onClose={handleClose}>
                <form onSubmit={handleSubmiting} onReset={handleReset}>
                    <Flex gap={10}>
                        <img
                            src="https://placehold.jp/50x50.png"
                            alt="avatar"
                            style={{ borderRadius: '50px', margin: '5px' }}
                        />
                        <div>
                            <textarea
                                style={{ resize: 'none' }}
                                cols={30}
                                rows={5}
                            ></textarea>
                        </div>
                    </Flex>
                    <div style={{ marginBottom: '10px' }}></div>
                    <Flex content="content-between" gap={10}>
                        <Button type="reset" variant="outlined">
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained">
                            Enter
                        </Button>
                    </Flex>
                </form>
            </Popover>
        </div>
    );
};
