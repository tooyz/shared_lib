import { FC } from 'react';
import './styles.css';
export interface IInputProps {
    className?: string;
    label?: string;
    required?: boolean;
    placeholder?: string;
}
export declare const Input: FC<IInputProps>;
