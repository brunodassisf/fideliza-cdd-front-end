import { TypographyProps } from '@material-ui/core/Typography';

export type IText = {
    children: React.ReactNode;
    hasMarginTop?: number;
    hasMarginBottom?: number;
    shouldLoadColor?: boolean;
    weight?: string;
    size?: number;
    isUpperCase?: boolean;
} & TypographyProps;
