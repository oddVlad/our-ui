import React, { forwardRef, useState } from 'react';
import styles from './styles.module.scss';

export interface ICheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    color?: 'primary' | 'secondary' | 'success' | 'error';
    iconSize?: 'small' | 'medium' | 'large';
    checked?: boolean;
    disabled?: boolean;
    onChange?: () => void;
}

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
    (
        {
            onChange,
            iconSize = 'medium',
            color = 'primary',
            checked = false,
            disabled = false,
            ...props
        },
        ref
    ) => {
        const [isChecked, setChecked] = useState<boolean>(checked);

        const handleChange = (): void => {
            if (!onChange) {
                setChecked((prev) => !prev);
            } else {
                onChange();
            }
        };

        return (
            <div className={styles.checkbox_container}>
                <input
                    ref={ref}
                    type="checkbox"
                    checked={onChange ? checked : isChecked}
                    className={styles.hidden_checkbox}
                    disabled={disabled}
                    onChange={handleChange}
                    {...props}
                />
                <div
                    className={[styles.checkbox, styles[color]].join(' ')}
                    onClick={handleChange}
                    {...props}
                >
                    <svg
                        className={[
                            styles.checkbox_mark,
                            styles[iconSize],
                        ].join(' ')}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 24 24"
                    >
                        <path d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z"></path>
                    </svg>
                </div>
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
