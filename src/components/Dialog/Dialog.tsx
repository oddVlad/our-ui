import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

export interface IDialogProps {
    open?: boolean;
    onClose?: () => void;
    screen?: boolean;
    children?: JSX.Element | string | JSX.Element[];
}

const Dialog = ({
    open = false,
    onClose = () => {},
    screen = false,
    children = '',
}: IDialogProps) => {
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!dialogRef.current) return;

        document.body.classList.add('stop_scrolling');
        document.addEventListener('keydown', handleEscKeyPress);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.body.classList.remove('stop_scrolling');
            document.removeEventListener('keydown', handleEscKeyPress);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dialogRef.current &&
            !dialogRef.current.contains(event.target as Node) &&
            open
        ) {
            onClose();
        }
    };

    const handleEscKeyPress = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    return (
        open && (
            <div className={styles.dialog_overlay} title="Close">
                <div
                    ref={dialogRef}
                    className={[
                        styles.dialog,
                        screen && styles.dialog_screen,
                    ].join(' ')}
                >
                    {children}
                </div>
            </div>
        )
    );
};

export default Dialog;
