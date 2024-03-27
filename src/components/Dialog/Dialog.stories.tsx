import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Dialog from './Dialog';
import Flex from '../Flex';
import Button from '../Button';

const meta = {
    title: 'Components/Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;

export const Default = () => {
    const [isOpenDialog, setOpenDialog] = useState<boolean>(false);

    const handleToggleDialog = (): void => {
        setOpenDialog(!isOpenDialog);
    };

    const handleCloseDialog = (): void => {
        setOpenDialog(false);
    };

    return (
        <>
            <Button onClick={handleToggleDialog} variant="outlined">
                toggle dialog
            </Button>
            <Dialog isOpen={isOpenDialog} onClose={handleCloseDialog}>
                <Flex direction="column" gap={15}>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quam dolores inventore beatae. Facere ab quaerat
                        adipisci non voluptas optio illum ex fugiat rem,
                        laudantium distinctio ipsam, minus natus excepturi
                        labore!
                    </p>
                    <Button onClick={handleCloseDialog} variant="contained">
                        Okey
                    </Button>
                </Flex>
            </Dialog>
        </>
    );
};

export const FullScreen = () => {
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

    const handleToggleDialog = (): void => {
        setDialogOpen((prev) => !prev);
    };

    const handleCloseDialog = (): void => {
        setDialogOpen(false);
    };

    return (
        <>
            <Button onClick={handleToggleDialog} variant="outlined">
                Full Screen
            </Button>
            <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog} isScreen>
                <Flex direction="column" gap={15}>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quam dolores inventore beatae. Facere ab quaerat
                        adipisci non voluptas optio illum ex fugiat rem,
                        laudantium distinctio ipsam, minus natus excepturi
                        labore!
                    </p>
                    <Button onClick={handleCloseDialog} variant="contained">
                        Okey
                    </Button>
                </Flex>
            </Dialog>
        </>
    );
};
