import React, { CSSProperties, FC } from 'react';
import cx from 'classnames';
import './styles.css';

export interface IButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  text?: string;
  style?: CSSProperties;
}

export const Button: FC<IButtonProps> = ({ onClick, disabled, className, text, style }) => (
  <button type="button" className={cx('button', className)} onClick={onClick} style={style} disabled={disabled}>
    {text}
  </button>
);
