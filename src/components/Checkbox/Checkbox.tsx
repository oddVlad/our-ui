import React, { InputHTMLAttributes, useState } from 'react';
import styles from './styles.module.scss';

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    color?: 'primary' | 'secondary' | 'success' | 'error';
    iconSize?: 'small' | 'medium' | 'large';
    onChange?: () => void;
}

const Checkbox = ({
    checked = false,
    disabled = false,
    onChange,
    iconSize = 'medium',
    color = 'primary',
    ...props
}: ICheckboxProps) => {
    const [isChecked, setChecked] = useState(checked);

    const clickHandler = (
        event: React.MouseEvent<HTMLElement, MouseEvent>
    ): void => {
        event.preventDefault();
        if (!onChange) {
            setChecked(!isChecked);
        } else {
            onChange();
        }
    };
    return (
        <div className={styles.checkbox_container}>
            <input
                type="checkbox"
                checked={!onChange ? isChecked : checked}
                className={styles.hidden_checkbox}
                disabled={disabled}
                {...props}
            />
            <div
                className={[styles.checkbox, styles[color]].join(' ')}
                onClick={clickHandler}
                {...props}
            >
                <svg
                    className={[styles.checkbox_mark, styles[iconSize]].join(
                        ' '
                    )}
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
};

export default Checkbox;
