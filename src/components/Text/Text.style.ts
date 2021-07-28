import { makeStyles } from '@material-ui/core/styles';
import { choiceWeight, choiceColor } from '../../theme/util';

interface IText {
  shouldLoadColor?: string;
  weight?: string;
  isUpperCase?: boolean;
}

export const useStyles = makeStyles((theme) => ({
  title: (props: IText) => ({
    color: `${choiceColor(props.shouldLoadColor)}`,
    fontFamily: `${choiceWeight(props.weight)}`,
    textTransform: props.isUpperCase ? 'uppercase' : 'initial',
  }),
}));
