import React from 'react';
import styles from './styles.module.scss';

export interface IFlexProps {
    direction?: 'row' | 'column';
    align?: 'align-center' | 'align-baseline' | 'align-end' | 'none';
    content?:
        | 'content-center'
        | 'content-between'
        | 'content-around'
        | 'content-evenly'
        | 'none';
    gap?: number;
    isWrapped?: boolean;
    children?: JSX.Element | string | JSX.Element[];
}

const Flex = ({
    direction = 'row',
    align = 'none',
    content = 'none',
    gap = 0,
    isWrapped = true,
    children = '',
}: IFlexProps) => {
    return (
        <div
            className={[
                styles.flex,
                styles[direction],
                styles[align],
                styles[content],
                isWrapped && styles.wrap,
            ].join(' ')}
            style={{ gap: `${gap}px` }}
        >
            {children}
        </div>
    );
};

export default Flex;
