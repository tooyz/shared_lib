import { CSSProperties, FC } from 'react';
import './styles.css';
export interface IButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    text?: string;
    style?: CSSProperties;
}
export declare const Button: FC<IButtonProps>;
