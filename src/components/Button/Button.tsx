import React from 'react';
import styles from './styles.module.scss';

export interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'success' | 'error';
    variant?: 'text' | 'outlined' | 'contained';
    upper?: boolean;
    children?: JSX.Element | string | JSX.Element[];
}

const Button = ({
    size = 'medium',
    color = 'primary',
    variant = 'text',
    children = 'Button',
    upper = true,
    ...props
}: IButtonProps) => {
    return (
        <button
            className={[
                styles.button_root,
                styles[size],
                styles[color],
                styles[variant],
                upper && styles.upper,
            ].join(' ')}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
