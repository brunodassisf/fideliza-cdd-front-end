import Box from '@material-ui/core/Box';
import { createTheme, withStyles } from '@material-ui/core/styles';
import { Nunito, Nunito600, Nunito700, Nunito800, Nunito900 } from './font';

const primaryMain = '#e07a5f';
const primaryText = '#f4f1de';

const secondaryMain = '#3d405b';
const secondaryText = '#f2cc8f';

export const Root = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
})(Box);

export default createTheme({
  palette: {
    primary: {
      main: primaryMain,
      contrastText: primaryText,
    },
    secondary: {
      main: secondaryMain,
      contrastText: secondaryText,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [Nunito, Nunito600, Nunito700, Nunito800, Nunito900],
      },
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.0rem',
      '@media (min-width:600px)': {
        fontSize: '2.3rem',
      },
    },
    h3: {
      fontSize: '1.8rem',
      '@media (min-width:600px)': {
        fontSize: '2.0rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    h5: {
      fontSize: '1.3rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h6: {
      fontSize: '1.1rem',
      '@media (min-width:600px)': {
        fontSize: '1.3rem',
      },
    },
    button: {
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.2rem',
      },
    },
  },
});
