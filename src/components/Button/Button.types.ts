import { ButtonProps } from '@material-ui/core/Button';

export type IButton = {
  sizeText?: number;
  isUpperCase?: boolean;
  mt?: number;
  mb?: number;
  px?: number;
  heigth?: number;
  align?: string;
} & ButtonProps;
