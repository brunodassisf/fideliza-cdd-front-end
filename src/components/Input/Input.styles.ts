import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  input: {
    position: 'relative',
    '& .MuiOutlinedInput-root': {
      borderRadius: theme.spacing(2),
    },
    '& .MuiInputLabel-outlined': {
      fontFamily: 'Nunito-700',
    },
    // '& .MuiFormLabel-root': {
    //     color: theme.palette.primary.contrastText,
    // },
    // '& .MuiInputBase-root': {
    //     color: theme.palette.primary.contrastText,
    // },
    // '& .MuiOutlinedInput-notchedOutline': {
    //     borderColor: theme.palette.primary.contrastText,
    // },
    // '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    //     borderColor: theme.palette.primary.contrastText,
    // },
  },
  magicEye: {
    position: 'absolute',
    cursor: 'pointer',
    zIndex: 2,
    color: theme.palette.primary.main,
    top: '20px',
    right: '24px',
    fontSize: '16px',
  },
}));
