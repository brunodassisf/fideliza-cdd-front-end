import { makeStyles } from '@material-ui/core/styles';
import { choiceWeight } from '../../theme/util';

interface IButton {
  sizeText?: number;
  isUpperCase?: boolean;
  heigth?: number;
  px?: number;
}

export const useStyles = makeStyles((theme) => ({
  button: (props: IButton) => ({
    borderRadius: '50px',
    paddingLeft: props.px ? props.px : 'initial',
    paddingRight: props.px ? props.px : 'initial',
    textTransform: props.isUpperCase ? 'uppercase' : 'initial',
    fontSize: props.sizeText ? props.sizeText : 'auto',
    height: props.heigth ? props.heigth : 'auto',
    fontFamily: 'Nunito-700',
  }),
}));
