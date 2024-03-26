import React, { RefObject, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

export interface IPopoverProps {
    open?: boolean;
    children?: JSX.Element | string | JSX.Element[];
    anchorEl?: RefObject<HTMLButtonElement> | null;
    margin?: number;
    onClose?: () => void;
}

const Popover = ({
    open = false,
    anchorEl = null,
    margin = 10,
    onClose = () => {},
    children = 'Popover content.',
}: IPopoverProps) => {
    const popoverRef = useRef<HTMLElement>(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        if (!popoverRef.current) return;
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscKeyPress);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKeyPress);
        };
    }, [open]);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [anchorEl, open]);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            popoverRef.current &&
            !popoverRef.current.contains(event.target as Node) &&
            open &&
            anchorEl?.current !== event.target
        ) {
            onClose();
        }
    };

    const handleEscKeyPress = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    const handleResize = () => {
        if (anchorEl?.current && popoverRef.current && open) {
            const { top, left, height } =
                anchorEl.current.getBoundingClientRect();
            setPosition({ top: top + height + margin, left });
        }
    };

    return (
        open && (
            <div
                className={styles.popover_content}
                style={{ top: position.top, left: position.left }}
                ref={popoverRef as RefObject<HTMLDivElement>}
            >
                {children}
            </div>
        )
    );
};

export default Popover;
