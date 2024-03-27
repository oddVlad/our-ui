import React, { RefObject, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import useClickOutside from '../../hooks/useClickOutside';
import useKeyPerss from '../../hooks/useKeyPress';

export interface IPopoverProps {
    isOpen?: boolean;
    children?: JSX.Element | string | JSX.Element[];
    anchorEl: RefObject<HTMLElement>;
    margin?: number;
    onClose?: () => void;
}

const Popover = ({
    isOpen = false,
    anchorEl,
    margin = 10,
    onClose = () => {},
    children = 'Popover content.',
}: IPopoverProps) => {
    const popoverRef = useRef<HTMLElement>(null);
    const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });

    useClickOutside(onClose, [popoverRef, anchorEl]);
    useKeyPerss(onClose, 'Escape');

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [anchorEl, isOpen]);

    const handleResize = () => {
        if (anchorEl?.current && popoverRef.current && isOpen) {
            const { top, left, height } =
                anchorEl.current.getBoundingClientRect();
            setPopoverPosition({ top: top + height + margin, left });
        }
    };

    return isOpen ? (
        <div
            className={styles.popover_content}
            style={{ top: popoverPosition.top, left: popoverPosition.left }}
            ref={popoverRef as RefObject<HTMLDivElement>}
        >
            {children}
        </div>
    ) : null;
};

export default Popover;
