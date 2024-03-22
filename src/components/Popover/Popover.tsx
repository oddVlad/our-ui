import React, { useEffect } from 'react';
import styles from './styles.module.scss';

export interface IPopoverProps {
    open?: boolean;
    children?: JSX.Element | string | JSX.Element[];
    anchorEl?: HTMLElement | null;
    onClose?: () => void;
}

const Popover = ({
    open = false,
    anchorEl = null,
    onClose = () => {},
    children = 'Popover content.',
}: IPopoverProps) => {
    const handleEscKeyPress = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleEscKeyPress);

        return () => {
            window.removeEventListener('keydown', handleEscKeyPress);
        };
    }, []);

    return (
        <div className={[styles.popover, open && styles.open].join(' ')}>
            {children}
        </div>
    );
};

export default Popover;
