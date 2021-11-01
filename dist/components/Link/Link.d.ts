import React, { FC } from 'react';
import './styles.css';
export interface ILinkProps {
    children: React.ReactNode;
    className?: string;
}
export declare const Link: FC<ILinkProps>;
