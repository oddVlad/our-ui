import React, { forwardRef, useState } from 'react';
import CheckIcon from '../../../assets/icons/check.svg';
import IndIcon from '../../../assets/icons/minus.svg';
import styles from './styles.module.scss';

export interface ICheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    color?: 'primary' | 'secondary' | 'success' | 'error';
    iconSize?: 'small' | 'medium' | 'large';
    checked?: boolean;
    disabled?: boolean;
    isIndeterminate?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
    (
        {
            onChange,
            iconSize = 'medium',
            color = 'primary',
            checked = false,
            isIndeterminate = false,
            disabled = false,
            ...props
        },
        ref
    ) => {
        const [isChecked, setChecked] = useState<boolean>(checked);

        const handleChange = (): void => {
            setChecked((prev) => !prev);
        };

        return (
            <div className={styles.checkbox_container}>
                <input
                    ref={ref}
                    type="checkbox"
                    checked={
                        (onChange ? checked : isChecked) || isIndeterminate
                    }
                    className={styles.hidden_checkbox}
                    disabled={disabled}
                    onChange={onChange || handleChange}
                    {...props}
                />
                <div
                    className={[styles.checkbox, styles[color]].join(' ')}
                    onClick={!onChange ? handleChange : undefined}
                    {...props}
                >
                    {isIndeterminate && !checked ? (
                        <IndIcon
                            className={[
                                styles.checkbox_mark,
                                styles[iconSize],
                            ].join(' ')}
                        />
                    ) : (
                        <CheckIcon
                            className={[
                                styles.checkbox_mark,
                                styles[iconSize],
                            ].join(' ')}
                        />
                    )}
                </div>
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
