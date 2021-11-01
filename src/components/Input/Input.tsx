import React, { FC } from 'react';
import cx from 'classnames';
import './styles.css';

export interface IInputProps {
  className?: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
}

export const Input: FC<IInputProps> = (props) => {
  const { className, label, required, ...rest } = props;

  return (
    <div>
      <label>
        {label && (
          <div className="input-label">
            {label}
            {required && <span className="input-required">*</span>}
          </div>
        )}
        <input className={cx('input', className)} {...rest} />
      </label>
    </div>
  );
};
