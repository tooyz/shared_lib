import React, { FC } from 'react';
import cx from 'classnames';
import './styles.css';

export interface ILinkProps {
  children: React.ReactNode;
  className?: string;
}

export const Link: FC<ILinkProps> = ({ children, className, ...rest }) => (
  <a className={cx('link', className)} {...rest}>
    {children}
  </a>
);
