import { makeStyles } from '@material-ui/core/styles';
import { choiceWeight } from '../../theme/util';

interface IText {
    shouldLoadColor?: boolean;
    hasMarginTop?: number;
    hasMarginBottom?: number;
    weight?: string;
    size?: number;
    isUpperCase?: boolean;
}

export const useStyles = makeStyles((theme) => ({
    container: (props: IText) => ({
        marginTop: props.hasMarginTop
            ? theme.spacing(props.hasMarginTop as number)
            : theme.spacing(0),
        marginBottom: props.hasMarginBottom
            ? theme.spacing(props.hasMarginBottom as number)
            : theme.spacing(0),
    }),
    title: (props: IText) => ({
        color: props.shouldLoadColor
            ? theme.palette.primary.contrastText
            : theme.palette.primary.main,
        fontFamily: `${choiceWeight(props.weight)}`,
        fontSize: props.size ? props.size : 'medium',
        textTransform: props.isUpperCase ? 'uppercase' : 'initial',
    }),
}));
