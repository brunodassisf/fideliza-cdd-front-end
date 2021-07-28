import { TypographyProps } from '@material-ui/core/Typography';

export type IText = {
  children: React.ReactNode;
  mt?: number;
  mb?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  shouldLoadColor?: string;
  isUpperCase?: boolean;
  weight?: string;
} & TypographyProps;
