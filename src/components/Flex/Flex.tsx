import React from 'react';
import styles from './styles.module.scss';

export interface IFlexProps {
    direction?: 'row' | 'column';
    align?: 'align-center' | 'align-baseline' | 'align-end';
    content?:
        | 'content-center'
        | 'content-between'
        | 'content-around'
        | 'content-evenly';
    gap?: number;
    children?: JSX.Element | string | JSX.Element[];
}

const Flex = ({
    direction = 'row',
    align = 'align-center',
    content = 'content-center',
    gap = 0,
    children = '',
}: IFlexProps) => {
    return (
        <div
            className={[
                styles.flex,
                styles[direction],
                styles[align],
                styles[content],
            ].join(' ')}
            style={{ gap: `${gap}px` }}
        >
            {children}
        </div>
    );
};

export default Flex;
