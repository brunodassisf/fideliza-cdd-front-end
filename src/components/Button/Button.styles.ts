import { makeStyles } from '@material-ui/core/styles';
import { choiceWeight } from '../../theme/util';

interface IButton {
    hasMarginTop: number | undefined;
    hasMarginBottom: number | undefined;
    weight?: string;
    fontSize?: number;
    height?: number;
    isUpperCase?: boolean;
}

export const useStyles = makeStyles((theme) => ({
    container: (props: IButton) => ({
        marginTop: props.hasMarginTop
            ? theme.spacing(props.hasMarginTop as number)
            : theme.spacing(0),
        marginBottom: props.hasMarginBottom
            ? theme.spacing(props.hasMarginBottom as number)
            : theme.spacing(0),
        textAlign: 'center',
        '& .MuiButton-root': {
            height: `${props.height}px`,
            padding: props.height ? '0px 16px' : '6px 16px',
            fontSize: props.fontSize ? props.fontSize : 'medium',
            textTransform: props.isUpperCase ? 'uppercase' : 'initial',
            fontFamily: `${choiceWeight(props.weight)}`,
        },
    }),
    button: {
        borderRadius: '20px',
    },
}));
