import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    bg?: string;
    block?: boolean;
    children: string | React.ReactChild;
    color?: string;
}
