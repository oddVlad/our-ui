import React, { forwardRef } from 'react';
import styles from './styles.module.scss';

export interface IButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'success' | 'error';
    variant?: 'text' | 'outlined' | 'contained';
    isUpper?: boolean;
    children?: JSX.Element | string | JSX.Element[];
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
    (
        {
            size = 'medium',
            color = 'primary',
            variant = 'text',
            isUpper = true,
            children = 'Button',
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                className={[
                    styles.button_root,
                    styles[size],
                    styles[color],
                    styles[variant],
                    isUpper && styles.upper,
                ].join(' ')}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
export default Button;
