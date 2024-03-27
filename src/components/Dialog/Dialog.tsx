import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import useClickOutside from '../../hooks/useClickOutside';
import useKeyPerss from '../../hooks/useKeyPress';
import { STOP_SCROLLING_CLASSNAME } from '../../values';

export interface IDialogProps {
    isOpen?: boolean;
    onClose?: () => void;
    isScreen?: boolean;
    children?: JSX.Element | string | JSX.Element[];
}

const Dialog = ({
    isOpen = false,
    onClose = () => {},
    isScreen = false,
    children = '',
}: IDialogProps) => {
    const dialogRef = useRef<HTMLDivElement>(null);

    useClickOutside(onClose, [dialogRef]);
    useKeyPerss(onClose, 'Escape');

    useEffect(() => {
        if (!dialogRef.current) return;

        document.body.classList.add(STOP_SCROLLING_CLASSNAME);

        return () => {
            document.body.classList.remove(STOP_SCROLLING_CLASSNAME);
        };
    }, [isOpen]);

    return isOpen ? (
        <div className={styles.dialog_overlay} title="Close">
            <div
                ref={dialogRef}
                className={[
                    styles.dialog,
                    isScreen && styles.dialog_screen,
                ].join(' ')}
            >
                {children}
            </div>
        </div>
    ) : null;
};

export default Dialog;
