import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  wave: {
    display: 'block',
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    height: '100vh',
    backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 1350 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgba(244, 241, 222, 1)" d="M 0 83 C 256 83 256 139 512 139 L 512 139 L 512 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(244, 241, 222, 1)" d="M 511 139 C 930.5 139 930.5 428 1350 428 L 1350 428 L 1350 0 L 511 0 Z" stroke-width="0"></path> </svg>')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#81b29a',
    zIndex: -1,
  },
  gridContainer: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  appBar: {
    marginBottom: theme.spacing(4),
    borderTopLeftRadius: theme.spacing(3),
    borderTopRightRadius: theme.spacing(3),
    '& .MuiTab-wrapper': {
      fontFamily: 'Nunito-800',
    },
  },
  boxModal: {
    borderRadius: theme.spacing(3),
  },
}));
