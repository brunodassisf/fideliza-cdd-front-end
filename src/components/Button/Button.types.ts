import { ButtonProps } from '@material-ui/core/Button';

export type IButton = {
    hasMarginTop?: number;
    hasMarginBottom?: number;
    weight?: string;
    fontSize?: number;
    isUpperCase?: boolean;
    height?: number;
} & ButtonProps;
