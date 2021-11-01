import React, { FC } from 'react';
import cx from 'classnames';
import './styles.css';

export interface ICheckboxProps {
  className?: string;
  label?: any;
}

export const Checkbox: FC<ICheckboxProps> = (props) => {
  const { className, label, ...rest } = props;

  return (
    <div>
      <label className="checkbox-wrapper">
        <input type="checkbox" className={cx('checkbox', className)} {...rest} />
        {label && <div className="checkbox-label">{label}</div>}
      </label>
    </div>
  );
};
